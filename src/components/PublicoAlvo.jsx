import { useEffect, useRef } from "react";
import { FaBook } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import PublicoAlvoCard from "./PublicoAlvoCard";
import BannerEstudantes from "./BannerEstudantes";

const PublicoAlvo = () => {

    const secaoRef = useRef(null);
    const tituloRef = useRef(null);
    const caixaRef = useRef(null);

    useEffect(() => {

        const animar = () => {
            const secao = secaoRef.current;
            if (!secao) return;

            // 0 = seção recém chegou, 1 = 100vh rolados (animação concluída)
            const topo = secao.getBoundingClientRect().top;
            const progresso = Math.min(Math.max(-topo / window.innerHeight, 0), 1);

            // Título: sobe e desaparece na primeira parte da rolagem
            const progressoTitulo = Math.min(progresso / 0.45, 1);
            const subidaTitulo = 1 - Math.pow(1 - progressoTitulo, 3);

            if (tituloRef.current) {
                tituloRef.current.style.transform = `translateY(${-subidaTitulo * 60}vh)`;
                tituloRef.current.style.opacity = String(1 - progressoTitulo);
            }

            // Caixa com os cards: sobe de baixo até o centro da tela
            const progressoCaixa = Math.min(Math.max((progresso - 0.15) / 0.85, 0), 1);
            const subidaCaixa = 1 - Math.pow(1 - progressoCaixa, 3);

            if (caixaRef.current) {
                caixaRef.current.style.transform = `translateY(${(1 - subidaCaixa) * 100}vh)`;
                caixaRef.current.style.opacity = String(Math.min(progressoCaixa * 1.5, 1));
            }
        };

        window.addEventListener("scroll", animar, { passive: true });
        window.addEventListener("resize", animar);
        animar();

        return () => {
            window.removeEventListener("scroll", animar);
            window.removeEventListener("resize", animar);
        };
    }, []);

    return(
        
    <section id="publico-alvo" ref={secaoRef} className="relative h-[200vh]">

        <div className="sticky top-0 h-screen overflow-hidden">

            {/* Fundo parado durante toda a animação */}
            <BannerEstudantes />

            {/* Título — sobe e some conforme a rolagem */}
            <div
                ref={tituloRef}
                className="absolute inset-0 flex items-center justify-center px-6 text-center will-change-transform"
            >

                <h2 className="text-4xl font-extrabold leading-tight text-[#F1FAEE] md:text-6xl">
                    Pensado em estudantes
                </h2>

            </div>

            {/* Cards — sobem de baixo até o centro da tela */}
            <div
                ref={caixaRef}
                style={{ transform: "translateY(100vh)", opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center px-6 will-change-transform"
            >

                <div className="flex w-full max-w-5xl flex-col divide-y divide-[#334155] overflow-hidden rounded-2xl border border-[#334155] bg-deep/40 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:flex-row md:divide-x md:divide-y-0">

                    <PublicoAlvoCard
                        Icone={FaBook}
                        titulo="Estudos"
                        texto="Acesso mais rápido e fluido
                            no seus materias de estudo"                
                    />

                    <PublicoAlvoCard
                        Icone={FaCamera}
                        titulo="Registros"
                        texto="Câmera eficiente para
                            fotografar lousas,
                            documentos e atividades."                
                    />

                    <PublicoAlvoCard
                        Icone={AiFillThunderbolt}
                        titulo="Desempenho"
                        texto="Fluidez para pesquisas,
                            aplicativos e tarefas
                            do dia a dia."                
                    />

                </div>

            </div>

        </div>

    </section>
    )
}

export default PublicoAlvo
