import { useEffect, useRef } from "react";
import HeroBeneficio from "./HeroBenefico"
import { MdOutlineSecurity } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa6";

const Hero = () => {

    const secaoRef = useRef(null);
    const tituloRef = useRef(null);
    const beneficiosRef = useRef(null);

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

            // Benefícios: sobem de baixo até o centro da tela
            const progressoBeneficios = Math.min(Math.max((progresso - 0.15) / 0.85, 0), 1);
            const subidaBeneficios = 1 - Math.pow(1 - progressoBeneficios, 3);

            if (beneficiosRef.current) {
                beneficiosRef.current.style.transform = `translateY(${(1 - subidaBeneficios) * 100}vh)`;
                beneficiosRef.current.style.opacity = String(Math.min(progressoBeneficios * 1.5, 1));
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

    return (

        <section id="inicio" ref={secaoRef} className="relative h-[200vh] bg-black">

            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Fundo parado durante toda a animação */}
                <div className="absolute inset-0 overflow-hidden">

                    <video
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover opacity-75"
                        src="./imagens/video_banner.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.55)_30%,rgba(0,0,0,0.15)_55%,rgba(2,10,29,0.65)_85%,#020A1D_100%)]"
                    />

                </div>

                {/* Título — sobe e some conforme a rolagem */}
                <div
                    ref={tituloRef}
                    className="absolute inset-0 flex items-center justify-center px-6 text-center will-change-transform"
                >

                    <div>

                        <h1 className="text-[clamp(54px,8vw,104px)] font-bold leading-[1.02] tracking-[-0.03em] text-[#F5F5F7]">
                            Smartphone JOVI
                        </h1>

                        <p className="mt-5 text-[clamp(19px,2.4vw,28px)] font-medium text-[#F5F5F7]">
                            Tecnologia que conecta.
                        </p>

                    </div>

                </div>

                {/* Benefícios — sobem de baixo até o centro da tela */}
                <div
                    ref={beneficiosRef}
                    style={{ transform: "translateY(100vh)", opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center px-6 will-change-transform"
                >

                    <ul className="flex flex-wrap items-center justify-center gap-10">

                        <HeroBeneficio
                            Icone={MdOutlineSecurity}
                            texto="Qualidade garantida"
                        />

                        <HeroBeneficio
                            Icone={GiProcessor}
                            texto="Tecnologia avançada"
                        />

                        <HeroBeneficio
                            Icone={FaHeadphones}
                            texto="Suporte especializado"
                        />

                    </ul>

                </div>

            </div>

        </section>
    )
}

export default Hero
