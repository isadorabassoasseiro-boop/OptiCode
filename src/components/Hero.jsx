import HeroBeneficio from "./HeroBenefico"
import { MdOutlineSecurity } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa6";
import { WiDirectionRight } from "react-icons/wi";

const Hero = () => {
    return(
        <>

    <section id="inicio">

        <div className="container">

            <div className="conteudo">

                <div className="textoHero">

                    <h1>
                        TECNOLOGIA<br/>
                        QUE<br/>
                        <span>CONECTA</span>
                    </h1>

                    <p>
                        Smartphone JOVI com um toque de OPTICODE,
                        desempenho excepcional e recursos que
                        facilitam o seu dia a dia.
                    </p>

                </div>

                <a href="#galerias" className="botao botaoHero">
                    CONHEÇA NOSSOS SMARTPHONES
                    <WiDirectionRight className="text-[#ffff] text-[25px]"/>
                </a>

                <ul className="beneficios">

                    <HeroBeneficio
                        Icone={MdOutlineSecurity}
                        linha1="QUALIDADE"
                        linha2="GARANTIDA"
                    />

                    <HeroBeneficio
                        Icone={GiProcessor}
                        linha1="TECNOLOGIA"
                        linha2="AVANÇADA"
                    />

                    <HeroBeneficio
                        Icone={FaHeadphones}
                        linha1="SUPORTE"
                        linha2="ESPECIALIZADO"
                    />

                </ul>

            </div>

            <div className="imgHero">

                <img src="./imagens/ChatGPT Image Aug 27, 2026, 04_31_27 PM.png" alt="Smartphones JOVI"
                />

            </div>

        </div>

    </section>

   
        
        </>
    )
}

export default Hero