function EquipeCard ({src,alt,titulo,funcao,textoTime}){
    return(
        <article className="cardTime">

            <div className="fotoPerfil">
                <img src={src} alt={alt} />

            </div>

            <div className="infoTime">
                <h3>
                    {titulo}
                </h3>
                <p className="funcao">
                    {funcao}
                </p>
                <p className="textoTime">
                    {textoTime}
                </p>

            </div>

        </article>
    )
}

export default EquipeCard