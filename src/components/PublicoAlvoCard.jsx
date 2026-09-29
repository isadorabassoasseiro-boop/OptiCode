function PublicoAlvoCard ({Icone,titulo,texto}) {

    return(
        <article className="cardPublico">
            <Icone className="
  text-[#1683FF]
  text-[70px]
  mb-[30px]
  [text-shadow:0_0_10px_rgba(0,140,255,0.45)]
  transition-all
  duration-300
  ease-in-out
" />
            <h3>
                {titulo}
            </h3>
            <p>
                {texto}
            </p>

        </article>

    )
}

export default PublicoAlvoCard