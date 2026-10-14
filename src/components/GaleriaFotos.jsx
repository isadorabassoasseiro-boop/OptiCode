import { FaRegImage } from "react-icons/fa";

function GaleriaFotos({ src, alt }) {
    return (

        <figure className="group relative isolate m-0 aspect-[3/4] w-[65%] flex-none snap-center overflow-hidden rounded-2xl border border-[#334155] bg-deep md:w-[calc((100%-2rem)/3)]">

            {/* Camada de mídia — amplia no hover para visualizar melhor a imagem */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                {src ? (
                    <img
                        src={src}
                        alt={alt}
                        draggable="false"
                        className="pointer-events-none h-full w-full select-none object-cover"
                    />
                ) : (
                    /* Placeholder: remover quando a prop `src` for usada */
                    <div
                        aria-hidden="true"
                        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-deep via-night to-deep"
                    >
                        <FaRegImage className="text-3xl text-ice/20" />
                    </div>
                )}
            </div>

        </figure>

    )
}

export default GaleriaFotos
