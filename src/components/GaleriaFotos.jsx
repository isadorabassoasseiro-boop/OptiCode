function GaleriaFotos ({texto,src}) {
    return (

        <figure className="foto">
            <img src={src} 
            alt={texto} />

        </figure>

    )
}

export default GaleriaFotos