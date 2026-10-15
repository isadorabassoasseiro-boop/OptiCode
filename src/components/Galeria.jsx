import { useRef, useState } from "react";
import GaleriaFotos from "./GaleriaFotos";
import GaleriaModal from "./GaleriaModal";

// Banner de fundo da seção de galeria.
const BANNER_GALERIA = "./imagens/banner%20galeria.jpg";

// Blocos da lista — as imagens serão adicionadas futuramente.
const fotos = [
    { src: "./imagens/joviV70_tela.jpg", alt: "Detalhe frontal do JOVI V70" },
    { src: "./imagens/jovi70_camera.jpg", alt: "Detalhe da câmera do JOVI V70" },
    // { src: "./imagens/joviV70_mesa.jpg", alt: "Detalhe da tela do JOVI V70" },
    { src: "./imagens/joviV70_lateral.jpg", alt: "Detalhe lateral do JOVI V70" },
    { src: "./imagens/joviV70_trás_reto.jpg", alt: "Detalhe traseiro do JOVI V70" },
];

const Galeria = () => {

    const listaRef = useRef(null);
    const arrasto = useRef({ ativo: false, capturado: false, movido: false, inicioX: 0, rolagemInicial: 0 });
    const [fotoAtiva, setFotoAtiva] = useState(null);

    // Arraste com o mouse para revelar os próximos blocos (no toque vale a rolagem nativa).
    const iniciarArrasto = (e) => {
        if (e.pointerType !== "mouse" || !listaRef.current) return;

        arrasto.current = {
            ativo: true,
            capturado: false,
            movido: false,
            inicioX: e.clientX,
            rolagemInicial: listaRef.current.scrollLeft,
        };
    };

    const arrastar = (e) => {
        if (!arrasto.current.ativo || !listaRef.current) return;

        const deslocamento = e.clientX - arrasto.current.inicioX;

        // Só vira arrasto (e captura o ponteiro) após um pequeno deslocamento,
        // para que um simples clique ainda abra o modal.
        if (!arrasto.current.capturado && Math.abs(deslocamento) > 5) {
            arrasto.current.capturado = true;
            listaRef.current.setPointerCapture(e.pointerId);
        }

        if (arrasto.current.capturado) {
            arrasto.current.movido = true;
            listaRef.current.scrollLeft = arrasto.current.rolagemInicial - deslocamento;
        }
    };

    const encerrarArrasto = () => {
        arrasto.current.ativo = false;
    };

    // Ignora o clique gerado após um arrasto, para não abrir o modal sem querer.
    const abrirModal = (indice) => {
        if (arrasto.current.movido) {
            arrasto.current.movido = false;
            return;
        }

        setFotoAtiva(indice);
    };

    return (

    <section id="galerias" className="relative isolate flex min-h-screen items-center overflow-hidden bg-night">

        {/* Banner de fundo com véu escuro para leitura do conteúdo */}
        <div aria-hidden="true" className="absolute inset-0">
            <img
                src={BANNER_GALERIA}
                alt=""
                className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/70 to-night/20" />
        </div>

        {/* Conteúdo — somente na metade esquerda da tela */}
        <div className="relative w-full px-6 py-24 md:px-16">

            <div className="md:w-1/2">

                <h2 className="text-center text-4xl font-extrabold leading-tight text-[#F1FAEE] md:text-left md:text-5xl">
                    Conheça o novo JOVI V70
                </h2>

                {/* Lista arrastável: bloco centralizado no mobile, 3 por vez no desktop,
                    limites disfarçados em transparência */}
                <div
                    ref={listaRef}
                    onPointerDown={iniciarArrasto}
                    onPointerMove={arrastar}
                    onPointerUp={encerrarArrasto}
                    onPointerCancel={encerrarArrasto}
                    className="mt-12 flex cursor-grab snap-x snap-mandatory select-none gap-4 overflow-x-auto px-[17.5%] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)] [scrollbar-width:none] active:cursor-grabbing md:snap-none md:px-0 [&::-webkit-scrollbar]:hidden"
                >
                    {fotos.map((foto, indice) => (
                        <GaleriaFotos
                            key={foto.alt}
                            src={foto.src}
                            alt={foto.alt}
                            aoClicar={() => abrirModal(indice)}
                        />
                    ))}
                </div>

            </div>

        </div>

        {/* Modal com a imagem ampliada — aberto ao clicar em um bloco */}
        {fotoAtiva !== null && (
            <GaleriaModal
                src={fotos[fotoAtiva].src}
                alt={fotos[fotoAtiva].alt}
                aoFechar={() => setFotoAtiva(null)}
            />
        )}

    </section>
    )
}

export default Galeria
