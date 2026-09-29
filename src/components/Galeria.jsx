import GaleriaFotos from "./GaleriaFotos"

const Galeria = () => {
    return (
        
    <section className="galeria" id="galerias">

        <div className="topoSecao3">

            <p className="label3">GALERIA</p>

            <h2>CONHEÇA A EXPERIÊNCIA</h2>

            <p className="descricao2">
                Veja alguns detalhes do smartphone e dos recursos
                pensados para o dia a dia dos estudantes.
            </p>

        </div>

        <div className="gridFotos">

            <figure className="foto fotoGrande">
                <img
                    src="./imagens/img-1.png"
                    alt="Smartphone JOVI em destaque"
                />
            </figure>

            <GaleriaFotos
                src="./imagens/img-2.png"
                alt="Detalhe das câmeras do smartphone"
            />

            <GaleriaFotos
                src="/imagens/img-3.png"
                alt="Tela do smartphone JOVI"
            />

            <GaleriaFotos
                src="./imagens/img-4.png"
                alt="Smartphone sendo utilizado para estudos"
            />

            <GaleriaFotos
                src="./imagens/img-5.png"
                alt="Detalhe lateral do smartphone"
            />
        </div>

    </section>
    )
}

export default Galeria