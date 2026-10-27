import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function PublicoAlvoCard ({Icone, titulo, texto}) {

    const [ativo, setAtivo] = useState(false);

    return(
        <article className={`group relative h-40 w-full overflow-hidden text-center transition-colors duration-300 ease-in-out md:h-44 md:flex-1 ${ativo ? "bg-navy/25" : "hover:bg-navy/25"}`}>

            {/* Clique reservado para o mobile (hover assume no desktop) */}
            <button
                type="button"
                onClick={() => setAtivo(!ativo)}
                aria-expanded={ativo}
                aria-label={`${titulo} — ${ativo ? "recolher" : "mostrar"} informações`}
                className="absolute inset-0 z-10 h-full w-full cursor-pointer outline-none md:cursor-default"
            />

            {/* "Roleta": ícone na parada 1, informações na parada 2 */}
            <div className={`absolute inset-x-0 top-0 flex h-[200%] flex-col transition-transform duration-700 ease-in-out ${ativo ? "-translate-y-1/2" : "group-hover:-translate-y-1/2"}`}>

                {/* Parada 1 — ícone */}
                <div className="flex h-1/2 flex-col items-center justify-center gap-3">

                    <Icone className={`text-5xl
  text-white/80
  transition-all
  duration-500
  ease-in-out
  ${ativo ? "opacity-0 scale-90" : "group-hover:opacity-0 group-hover:scale-90"}
`} />

                    <FaPlus className={`text-sm text-[#697994] transition-opacity duration-500 ease-in-out md:hidden ${ativo ? "opacity-0" : "group-hover:opacity-0"}`} />

                </div>

                {/* Parada 2 — informações */}
                <div className="flex h-1/2 flex-col items-center justify-center px-2">

                    <h3 className="text-xl font-bold text-[#F1FAEE]">
                        {titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#C4CCE0]">
                        {texto}
                    </p>

                </div>

            </div>

        </article>
    )
}

export default PublicoAlvoCard
