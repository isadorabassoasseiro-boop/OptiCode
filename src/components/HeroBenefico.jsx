function HeroBeneficio ({Icone, texto}) {
    return (

        <li className="itemBeneficio">
            <Icone />
            <span>{texto}</span>
        </li>
    )
}

export default HeroBeneficio
