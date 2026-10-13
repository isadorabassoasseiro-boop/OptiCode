import { FaBook } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import PublicoAlvoCard from "./PublicoAlvoCard";
import BannerEstudantes from "./BannerEstudantes";

const PublicoAlvo = () => {
    return(
        
    <section id="publico-alvo">

        <BannerEstudantes />

        <div className="relative isolate mx-auto -mt-28 w-full max-w-5xl px-6 pb-24 md:-mt-36">

            <div className="grid grid-cols-1 divide-y divide-[#334155] overflow-hidden rounded-2xl border border-[#334155] bg-deep/40 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:grid-cols-3 md:divide-x md:divide-y-0">

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

    </section>
    )
}

export default PublicoAlvo
