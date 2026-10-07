import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"
import HeaderLink from "./HeaderLink"

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false)
    const fecharMenu = () => setMenuAberto(false)

    return (
        <header className="fixed inset-x-0 top-0 z-10 bg-night/80 backdrop-blur-md">
            <nav className="relative mx-auto flex h-20 max-w-4xl items-center justify-between px-6 md:justify-center md:gap-16">

                <a href="#inicio" onClick={fecharMenu} aria-label="OptiCode — Home" className="flex items-center">
                    <img
                        src="./imagens/Logotipo OPTICODE em Branco.png"
                        alt="OptiCode"
                        className="h-14 w-auto brightness-0 invert opacity-80"
                    />
                </a>

                <ul
                    id="linksMenu"
                    className={`${menuAberto ? "flex" : "hidden"} absolute inset-x-0 top-20 flex-col gap-1 border-t border-navy/50 bg-night/95 px-6 py-4 backdrop-blur-md md:static md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
                >
                    <HeaderLink href="#inicio" texto="Home" onClick={fecharMenu} />
                    <HeaderLink href="#contato" texto="Suporte" onClick={fecharMenu} />
                    <HeaderLink href="#equipe" texto="Sobre" onClick={fecharMenu} />
                </ul>

                <button
                    type="button"
                    id="btnMenu"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="linksMenu"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-ice/80 transition-colors duration-300 hover:text-ice md:hidden"
                >
                    {menuAberto ? <FaXmark className="text-base" /> : <FaBars className="text-base" />}
                </button>

            </nav>
        </header>
    )
}

export default Header
