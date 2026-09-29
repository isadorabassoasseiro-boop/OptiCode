function SolucaoCard({ Icone, titulo, texto }) {
    return (
        <article className="card">
            <Icone
                className="
                 text-[#1683FF]
    text-[48px]
    block
    mb-[22px]
    [text-shadow:0_0_10px_rgba(0,140,255,0.35)]
    transition-all  
    duration-300
    ease-in-out 
  "
            />
            <h3>
                {titulo}
            </h3>

            <p>
                {texto}
            </p>

        </article>
    )
}

export default SolucaoCard