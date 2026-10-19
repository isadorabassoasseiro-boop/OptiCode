import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import EquipeCard from "./EquipeCard";

const membros = [
    {
        src: "./imagens/equipe1.png",
        alt: "Foto de Delvanne S. Sampaio Oliveira",
        titulo: "Delvanne S. Sampaio Oliveira",
        funcao: "Desenvolvedor Full-Stack",
        textoTime: "Responsável pelo desenvolvimento e estruturação da interface do projeto."
    },
    {
        src: "./imagens/equipe2.png",
        alt: "Foto de Gabriel Brito Braga",
        titulo: "Gabriel Brito Braga",
        funcao: "UI / UX Design",
        textoTime: "Responsável pelas pesquisas e levantamento de informações utilizadas na solução."
    },
    {
        src: "./imagens/equipe3.png",
        alt: "Foto de Isadora Basso Asseiro",
        titulo: "Isadora Basso Asseiro",
        funcao: "Desenvolvedor Front-End",
        textoTime: "Responsável pelo desenvolvimento e estruturação da interface do projeto."
    },
    {
        src: "./imagens/equipe4.png",
        alt: "Foto de Murilo Camilo da Silva",
        titulo: "Murilo Camilo da Silva",
        funcao: "Documentação",
        textoTime: "Responsável pela organização e documentação das informações do projeto."
    },
    {
        src: "./imagens/equipe5.png",
        alt: "Foto de Murilo Castro Chialastri",
        titulo: "Murilo Castro Chialastri",
        funcao: "Desenvolvedor Back-End",
        textoTime: "Responsável por manter a infraestrutura de códigos."
    }
];

const Equipe = () => {
    const total = membros.length;

    // Três cópias da lista: a do meio é a posição inicial e as
    // extremas permitem dar a volta sem exibir um "salto" na tela
    const itens = [...membros, ...membros, ...membros];

    const [indice, setIndice] = useState(total);
    const [suave, setSuave] = useState(true);
    const [visiveis, setVisiveis] = useState(3.3);
    const [arrastando, setArrastando] = useState(false);
    const [arraste, setArraste] = useState(0);

    const inicioArraste = useRef(null);
    const pistaRef = useRef(null);
    const visorRef = useRef(null);
    const podeMover = useRef(true);

    // Quantos cartões aparecem por vez — a fração (3.3, 2.2, 1.15)
    // deixa parte dos cartões vizinhos aparente nas laterais
    useEffect(() => {
        const atualizarVisiveis = () => {
            const largura = window.innerWidth;
            setVisiveis(largura >= 1024 ? 3.3 : largura >= 640 ? 2.2 : 1.15);
        };

        atualizarVisiveis();
        window.addEventListener("resize", atualizarVisiveis);

        return () => window.removeEventListener("resize", atualizarVisiveis);
    }, []);

    // Se o navegador interromper um deslize no meio (ex.: segurar a tela
    // durante a animação), destrava o carrossel para os próximos gestos
    useEffect(() => {
        const pista = pistaRef.current;
        if (!pista) return;

        const liberarMovimento = (evento) => {
            if (evento.target === pista && evento.propertyName === "transform") {
                podeMover.current = true;
            }
        };

        pista.addEventListener("transitioncancel", liberarMovimento);

        return () => pista.removeEventListener("transitioncancel", liberarMovimento);
    }, []);

    const mover = (passos) => {
        if (!podeMover.current) return;

        // Limita o destino para nunca passar do fim das cópias
        const alvo = Math.min(Math.max(indice + passos, 1), itens.length - 1 - Math.ceil(visiveis));
        if (alvo === indice) return;

        podeMover.current = false;
        setSuave(true);
        setIndice(alvo);
    };

    // Fim do deslize: volta silenciosamente para a cópia do meio,
    // que exibe exatamente os mesmos cartões (loop infinito)
    const aoTerminarDeslize = (evento) => {
        if (evento.target !== pistaRef.current || evento.propertyName !== "transform") return;

        podeMover.current = true;

        if (indice >= total * 2) {
            setSuave(false);
            setIndice(previsto => previsto - total);
        } else if (indice < total) {
            setSuave(false);
            setIndice(previsto => previsto + total);
        }
    };

    // Arraste segurando a tela (touch ou mouse)
    const aoIniciarArraste = (evento) => {
        if (evento.pointerType === "mouse" && evento.button !== 0) return;

        inicioArraste.current = evento.clientX;
        setArrastando(true);
        podeMover.current = true;

        evento.currentTarget.setPointerCapture(evento.pointerId);
    };

    const aoMoverArraste = (evento) => {
        if (inicioArraste.current === null) return;

        setArraste(evento.clientX - inicioArraste.current);
    };

    const aoEncerrarArraste = () => {
        if (inicioArraste.current === null) return;

        const deslocamentoPx = arraste;

        inicioArraste.current = null;
        setArrastando(false);
        setArraste(0);

        // Encaixa no cartão mais próximo conforme a distância arrastada
        const larguraCartaoPx = visorRef.current ? visorRef.current.clientWidth / visiveis : 0;
        let passos = larguraCartaoPx ? Math.round(-deslocamentoPx / larguraCartaoPx) : 0;

        if (passos === 0 && Math.abs(deslocamentoPx) > 60) {
            passos = deslocamentoPx < 0 ? 1 : -1;
        }

        if (passos !== 0) mover(passos);
    };

    const larguraCartao = 100 / visiveis;
    const espiada = ((visiveis % 1) / 2) * larguraCartao;
    const deslocamento = `${espiada - indice * larguraCartao}%`;

    return (
        <section id="equipe" className="scroll-mt-16 bg-night pb-24 pt-20">

            <div className="mx-auto mb-12 max-w-3xl px-6 text-center md:px-10">
                <h2 className="text-3xl font-extrabold text-ice md:text-4xl">
                    QUEM ESTÁ POR TRÁS DA OPTICODE
                </h2>
            </div>

            {/* Carrossel em tela cheia com loop infinito */}
            <div
                ref={visorRef}
                className="cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
                onPointerDown={aoIniciarArraste}
                onPointerMove={aoMoverArraste}
                onPointerUp={aoEncerrarArraste}
                onPointerCancel={aoEncerrarArraste}
            >
                <div
                    ref={pistaRef}
                    className="flex will-change-transform"
                    style={{
                        transform: arraste !== 0
                            ? `translateX(calc(${deslocamento} + ${arraste}px))`
                            : `translateX(${deslocamento})`,
                        transition: suave && !arrastando
                            ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
                            : "none"
                    }}
                    onTransitionEnd={aoTerminarDeslize}
                >
                    {itens.map((membro, posicao) => (
                        <div
                            key={posicao}
                            aria-hidden={posicao < total || posicao >= total * 2}
                            className="shrink-0 px-2 md:px-3"
                            style={{ flex: `0 0 ${larguraCartao}%` }}
                        >
                            <EquipeCard
                                src={membro.src}
                                alt={membro.alt}
                                titulo={membro.titulo}
                                funcao={membro.funcao}
                                textoTime={membro.textoTime}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Controles */}
            <div className="mt-10 flex items-center justify-between px-6 md:px-10">
                <button
                    type="button"
                    aria-label="Ver integrante anterior"
                    onClick={() => mover(-1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/60 text-ice transition-colors duration-300 hover:border-azure hover:text-azure"
                >
                    <FaArrowLeft />
                </button>

                <button
                    type="button"
                    aria-label="Ver próximo integrante"
                    onClick={() => mover(1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/60 text-ice transition-colors duration-300 hover:border-azure hover:text-azure"
                >
                    <FaArrowRight />
                </button>
            </div>

        </section>
    );
}

export default Equipe
