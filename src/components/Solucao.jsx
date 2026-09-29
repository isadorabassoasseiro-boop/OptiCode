import { MdPhotoCamera } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { LuBug } from "react-icons/lu";
import { GiSandsOfTime } from "react-icons/gi";
import { IoEyeSharp } from "react-icons/io5";
import SolucaoCard from "./SolucaoCard";

const Solucao = () => {
    return (
        
         <section id="solucao">

        <div className="topoSecao1">

            <p className="label">
                A SOLUÇÃO
            </p>

            <h2>
                SMARTPHONE FEITO PARA VOCÊ
            </h2>

        </div>

        <div className="grid">

            <SolucaoCard
                Icone={MdPhotoCamera}
                titulo="FOTOGRAFIA"
                texto="Assistência fotográfica integrada que estabiliza o software,
                    corrige granulação e melhora a imagem em tempo real."
            
            />

            <SolucaoCard
                Icone={FaRobot}
                titulo="PÓS-PROCESSAMENTO"
                texto="Pós-processamento com IA, oferecendo maior controle
                    e reduzindo distorções indesejadas."
            
            />

            <SolucaoCard
                Icone={LuBug}
                titulo="ARQUIVOS E BUGS"
                texto="Sistema de salvamento mais robusto e confiável,
                    reduzindo falhas e perda de arquivos."
            
            />

            <SolucaoCard
                Icone={GiSandsOfTime}
                titulo="SHUTTER LAG"
                texto="Captura mais rápida e instantânea,
                    evitando a perda de momentos importantes."
            
            />


            <SolucaoCard
                Icone={IoEyeSharp}
                titulo="SOCO RÁPIDO"
                texto="Foco rápido e preciso mesmo em diferentes
                    condições de iluminação."
            
            />

        </div>

    </section>
    )
}

export default Solucao