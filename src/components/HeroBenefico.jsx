function HeroBeneficio ({Icone, linha1,linha2}) {
    return (

        <li className="caixaBeneficio">
             <Icone className="text-[#1683FF] text-[38px]" />
             <p>
                {linha1}
                <br/>
                {linha2}
             </p>
        </li>
    )
}

export default HeroBeneficio