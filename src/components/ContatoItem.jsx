function ContatoItem ({Icone,titulo,texto}) {
    return(
        <div className="flex items-center gap-4">

            <Icone className="flex h-11 w-11 min-w-11 items-center justify-center rounded-[10px] border border-navy/50 bg-navy/30 text-xl text-azure"/>

            <div>
                <h4 className="text-sm font-bold text-white">
                    {titulo}
                </h4>
                <p className="mt-1 text-sm text-white/70">
                    {texto}
                </p>
            </div>

        </div>
    )
}

export default ContatoItem
