import { useEffect, useRef, useState } from "react"
import { FaBars, FaXmark, FaMagnifyingGlass } from "react-icons/fa6"
import HeaderLink from "./HeaderLink"

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false)
    const [buscaAberta, setBuscaAberta] = useState(false)
    const campoBusca = useRef(null)

    const fecharMenu = () => setMenuAberto(false)

    const alternarBusca = () => {
        setBuscaAberta((aberta) => !aberta)
    }

    useEffect(() => {
        if (buscaAberta && campoBusca.current) {
            campoBusca.current.focus()
        }
    }, [buscaAberta])

    return (
        <header className="fixed inset-x-0 top-0 z-10 bg-night/80 backdrop-blur-md">
            <nav className="relative grid h-16 w-full grid-cols-2 items-center px-6 md:grid-cols-3 md:px-12">

                {/* Logo — esquerda */}
                <div className="flex items-center justify-self-start md:col-start-1">
                    <a
                        href="#inicio"
                        onClick={fecharMenu}
                        aria-label="OptiCode — Home"
                        className="flex items-center"
                    >
                        <img
                            src="./imagens/Logotipo%20OPTICODE%20em%20Branco.png"
                            alt="OptiCode"
                            className="h-10 w-auto brightness-0 invert opacity-90"
                        />
                    </a>
                </div>

                {/* Navegação — centro */}
                <ul
                    id="linksMenu"
                    className={`${menuAberto ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-1 border-t border-navy/50 bg-night/95 px-6 py-4 backdrop-blur-md md:static md:col-start-2 md:flex md:flex-row md:items-center md:justify-center md:gap-10 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
                >
                    <HeaderLink href="#inicio" texto="Home" onClick={fecharMenu} />
                    <HeaderLink href="#contato" texto="Suporte" onClick={fecharMenu} />
                    <HeaderLink href="#equipe" texto="Sobre" onClick={fecharMenu} />
                </ul>

                {/* Pesquisa expansível — direita (+ hamburger no mobile) */}
                <div className="flex items-center gap-3 justify-self-end md:col-start-3">
                    <input
                        ref={campoBusca}
                        type="text"
                        placeholder="Buscar"
                        aria-label="Campo de pesquisa"
                        className={`${buscaAberta ? "w-40 border px-3 opacity-100 md:w-56" : "w-0 border-0 px-0 opacity-0"} rounded-full border-navy/50 bg-night/60 py-1 text-sm text-ice placeholder-ice/40 transition-all duration-300 focus:border-azure/60 focus:outline-none`}
                    />
                    <button
                        type="button"
                        aria-label={buscaAberta ? "Fechar pesquisa" : "Abrir pesquisa"}
                        aria-expanded={buscaAberta}
                        onClick={alternarBusca}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ice/70 transition-colors duration-300 hover:text-ice"
                    >
                        <FaMagnifyingGlass className="text-sm" />
                    </button>
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
                </div>

            </nav>
        </header>
    )
}

export default Header
