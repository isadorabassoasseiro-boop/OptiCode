function ContatoItem ({Icone,titulo,texto}) {
    return(
        <div className="itemContato">
            <Icone className="
  min-w-[45px]
  h-[45px]
  flex
  items-center
  justify-center
  bg-[#061A3A]
  border
  border-[#1760B8]
  rounded-[10px]
  text-[#1683FF]
  text-[28px]
"/>

            <div>
                <h4>
                    {titulo}
                </h4>
                <p>
                    {texto}
                </p>
            </div>

        </div>
    )
}

export default ContatoItem