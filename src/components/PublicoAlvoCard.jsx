function PublicoAlvoCard ({Icone, titulo, texto, cor}) {

    return(
        <article className="group flex flex-col items-center gap-4 px-8 py-12 text-center transition-colors duration-300 ease-in-out hover:bg-navy/25">

            <Icone className={`${cor}
  text-5xl
  [text-shadow:0_0_16px_currentColor]
  transition-transform
  duration-300
  ease-in-out
  group-hover:-translate-y-1
`} />

            <h3 className="text-xl font-bold text-[#F1FAEE]">
                {titulo}
            </h3>

            <p className="text-sm leading-relaxed text-[#C4CCE0]">
                {texto}
            </p>

        </article>
    )
}

export default PublicoAlvoCard
