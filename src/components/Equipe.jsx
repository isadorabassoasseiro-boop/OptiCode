import EquipeCard from "./EquipeCard"

const Equipe = () => {
    return(
        


    <section id="equipe">

        <div className="topoSecao4">

            <p className="label4">NOSSA EQUIPE</p>

            <h2>QUEM ESTÁ POR TRÁS DA OPTICODE</h2>

            <p className="descricao3">
                Conheça os integrantes responsáveis pelo desenvolvimento
                da nossa solução.
            </p>

        </div>

        <div className="gridTime">

            <EquipeCard
                src="./imagens/equipe1.png"
                alt="Foto de Delvanne S. Sampaio Oliveira"
                titulo="Delvanne S. Sampaio Oliveira"
                funcao="Desenvolvedor Full-Stack"
                textoTime="Responsável pelo desenvolvimento e estruturação
                        da interface do projeto."
            />

            <EquipeCard
                src="./imagens/equipe2.png"
                alt="Foto de Gabriel Brito Braga"
                titulo="Gabriel Brito Braga"
                funcao=" UI / UX Design"
                textoTime="Responsável pelas pesquisas e levantamento de
                        informações utilizadas na solução."
            />

             <EquipeCard
                src="./imagens/equipe3.png"
                alt="Foto de Isadora Basso Asseiro"
                titulo="Isadora Basso Asseiro"
                funcao="Desenvolvedor Front-End"
                textoTime="Responsável pelo desenvolvimento e estruturação
                        da interface do projeto."
            />

              <EquipeCard
                src="./imagens/equipe4.png"
                alt="Foto de Murilo Camilo da Silva"
                titulo="Murilo Camilo da Silva"
                funcao=" Documentação"
                textoTime="Responsável pela organização e documentação
                        das informações do projeto."
            />

              <EquipeCard
                src="./imagens/equipe5.png"
                alt="Foto de Murilo Castro Chialastri"
                titulo="Murilo Castro Chialastri"
                funcao="Desenvolvedor Back-En"
                textoTime="Responsável por manter a infraestrutura de códigos."
            />

        </div>

    </section>
    )
}

export default Equipe