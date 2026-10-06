import HeroBeneficio from "./HeroBenefico"
import { MdOutlineSecurity } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa6";

const Hero = () => {
    return (
        <section id="inicio">

            <video
                className="videoHero"
                src="./imagens/video_banner.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="sombraHero" aria-hidden="true"></div>

            <div className="conteudoHero">

                <h1 className="tituloHero">
                    Smartphone JOVI
                </h1>

                <p className="subtituloHero">
                    Tecnologia que conecta.
                </p>

                <div className="acoesHero">
                    <a href="#solucao" className="botaoPilha">
                        Saiba mais
                    </a>

                    <a href="#contato" className="botaoPilha contorno">
                        Comprar
                    </a>
                </div>

                <ul className="beneficiosHero">

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

        </section>
    )
}

export default Hero
