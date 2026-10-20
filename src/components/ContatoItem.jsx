function ContatoItem ({Icone,titulo,texto}) {
    return(
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">

            <Icone className="flex h-11 w-11 min-w-11 items-center justify-center rounded-full border border-navy/50 bg-navy/30 text-xl text-white"/>

            <div>
                <h4 className="text-sm font-bold text-white lg:text-ice">
                    {titulo}
                </h4>
                <p className="mt-1 text-sm text-white/80 lg:text-white">
                    {texto}
                </p>
            </div>

        </div>
    )
}

export default ContatoItem
