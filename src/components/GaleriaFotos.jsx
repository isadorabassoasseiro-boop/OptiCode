import { FaRegImage } from "react-icons/fa";

function GaleriaFotos({ src, alt, aoClicar }) {
    return (

        <button
            type="button"
            onClick={aoClicar}
            aria-label={`Ampliar imagem: ${alt}`}
            className="group relative isolate m-0 aspect-[3/4] w-[80vw] flex-none snap-center cursor-pointer overflow-hidden rounded-2xl border border-transparent bg-deep outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:w-[calc((100%-2rem)/3)]"
        >

            {/* Camada de mídia — amplia no hover para visualizar melhor a imagem */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                {src ? (
                    <img
                        src={src}
                        alt=""
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

        </button>

    )
}

export default GaleriaFotos
