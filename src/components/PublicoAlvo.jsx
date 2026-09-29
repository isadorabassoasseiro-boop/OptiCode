import { PiStudentBold } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import PublicoAlvoCard from "./PublicoAlvoCard";

const PublicoAlvo = () => {
    return(
        
    <section id="publico-alvo">

        <div className="topoSecao2">

            <p className="label2">PÚBLICO-ALVO</p>

            <h2>PENSADO PARA ESTUDANTES</h2>

            <p className="descricao">
                A solução é voltada para estudantes que utilizam o smartphone
                como ferramenta de apoio na rotina acadêmica, seja para estudar,
                registrar conteúdos, realizar trabalhos ou se organizar.
            </p>

        </div>

        <div className="caixaPrincipal">

            <div className="areaPrincipal">

                <div className="iconeGrande">
                    <PiStudentBold className="text-[#1683FF]
  text-[70px]
  mb-[30px]
  [text-shadow:0_0_10px_rgba(0,140,255,0.45)]
  transition-all
  duration-300
  ease-in-out"/>
                </div>

                <div className="textoPrincipal">

                    <h3>ESTUDANTES</h3>

                    <p>
                        Uma solução desenvolvida para estudantes que
                        utilizam o smartphone como ferramenta no seu
                        dia a dia acadêmico.
                    </p>

                </div>

            </div>

            <div className="gridPublico">

                <PublicoAlvoCard
                    Icone={FaBook}
                    titulo="ESTUDOS"
                    texto="Acesso mais rápido e fluido
                        no seus materias de estudo"                
                />

                 <PublicoAlvoCard
                    Icone={FaCamera}
                    titulo="REGISTROS"
                    texto="Câmera eficiente para
                        fotografar lousas,
                        documentos e atividades."                
                />

                <PublicoAlvoCard
                    Icone={AiFillThunderbolt}
                    titulo="DESEMPENHO"
                    texto="Fluidez para pesquisas,
                        aplicativos e tarefas
                        do dia a dia."                
                />


            </div>

        </div>

    </section>
    )
}

export default PublicoAlvo