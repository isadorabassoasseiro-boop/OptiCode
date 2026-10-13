function HeroBeneficio ({Icone, texto}) {
    return (

        <li className="flex items-center gap-2 text-xs font-medium uppercase tracking-[1.2px] text-[#86868B]">
            <Icone className="text-base text-[#86868B]" />
            <span>{texto}</span>
        </li>
    )
}

export default HeroBeneficio
