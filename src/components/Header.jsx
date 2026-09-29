import HeaderLink from "./HeaderLink"

const Header = () => {
  return (

    <>

    <header>

    <nav className="navbar">

        <div className="logo">
            <i className="bx bxs-bolt icone" aria-hidden="true"></i>

            <a href="#inicio" className="nomeLogo">
                OPTI<span>CODE</span>
            </a>
        </div>

        <button className="btnMenu" id="btnMenu" aria-label="Abrir menu" aria-expanded="false" aria-controls="linksMenu">
            <i className="bx bx-menu" aria-hidden="true"></i>
        </button>

        <ul className="linksMenu" id="linksMenu">

            <HeaderLink
                href="#inicio"
                texto="inicio"
            
            />

            <HeaderLink
                href="#solucao"
                texto="Solução"
            
            />

            <HeaderLink
                href="#inicio"
                texto="inicio"
            
            />

            <HeaderLink
                href="#publico-alvo"
                texto="Público-Alvo"
            
            />

            <HeaderLink
                href="#galerias"
                texto="Galeria"
            
            />

            <HeaderLink
                href="equipe"
                texto="Nossa Equipe"
            
            />

            <HeaderLink
                href="#contato"
                texto="Contato"
            
            />
        </ul>

    </nav>

</header>
    
    </>
  )
}

export default Header