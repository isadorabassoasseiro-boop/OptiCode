function ContatoItem ({Icone,titulo,texto}) {
    return(
        <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:gap-4 lg:text-left">

            {/* Ícone azul e menor no mobile, branco e maior no desktop */}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl text-azure lg:h-10 lg:w-10 lg:text-3xl lg:text-white">
                <Icone/>
            </span>

            <div className="min-w-0">
                <h4 className="text-xs font-bold text-white lg:text-sm lg:text-ice">
                    {titulo}
                </h4>
                <p className="mt-0.5 break-words text-xs text-ice/80 lg:text-sm lg:text-white">
                    {texto}
                </p>
            </div>

        </div>
    )
}

export default ContatoItem
