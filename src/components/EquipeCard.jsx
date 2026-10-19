function EquipeCard ({src,alt,titulo,funcao,textoTime}){
    return(
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/50 bg-deep transition-colors duration-300 hover:border-azure/60">

            <div className="aspect-[3/2] overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col items-center p-5 text-center md:p-6">
                <h3 className="text-lg font-extrabold text-ice">
                    {titulo}
                </h3>

                <p className="mt-1 text-sm font-semibold text-azure">
                    {funcao}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ice/60">
                    {textoTime}
                </p>
            </div>

        </article>
    )
}

export default EquipeCard
