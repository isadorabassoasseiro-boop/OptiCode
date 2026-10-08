import { useState, useRef, useEffect } from "react"
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
        <header className="fixed inset-x-0 top-0 z-10 bg-neutral-900/70 backdrop-blur-lg">
            <nav className="relative mx-auto flex h-16 w-full items-center px-4 sm:px-6 md:px-10">

                {/* Logo — canto esquerdo */}
                <div className="flex flex-1 items-center">
                    <a
                        href="#inicio"
                        onClick={fecharMenu}
                        aria-label="OptiCode — Home"
                        className="flex items-center"
                    >
                        <img
                            src="./imagens/Logotipo%20OPTICODE%20em%20Branco.png"
                            alt="OptiCode"
                            className="h-8 w-auto md:h-9"
                        />
                    </a>
                </div>

                {/* Navegação — centro */}
                <ul
                    id="linksMenu"
                    className={`${menuAberto ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col items-center gap-1 border-t border-white/10 bg-neutral-900/90 px-6 py-5 shadow-md backdrop-blur-lg md:static md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
                >
                    <HeaderLink href="#inicio" texto="Home" onClick={fecharMenu} />
                    <HeaderLink href="#contato" texto="Suporte" onClick={fecharMenu} />
                    <HeaderLink href="#equipe" texto="Sobre" onClick={fecharMenu} />
                </ul>

                {/* Pesquisa expansível + menu mobile — canto direito */}
                <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
                    <input
                        ref={campoBusca}
                        type="text"
                        placeholder="Buscar"
                        aria-label="Campo de pesquisa"
                        className={`${buscaAberta ? "w-28 border border-white/20 px-3 opacity-100 sm:w-40 md:w-56" : "w-0 border-0 px-0 opacity-0"} min-w-0 rounded-full bg-white/10 py-1.5 text-sm text-white placeholder-white/40 transition-all duration-300 focus:border-white/40 focus:outline-none`}
                    />
                    <button
                        type="button"
                        aria-label={buscaAberta ? "Fechar pesquisa" : "Abrir pesquisa"}
                        aria-expanded={buscaAberta}
                        onClick={alternarBusca}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white"
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
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors duration-300 hover:bg-white/10 md:hidden"
                    >
                        {menuAberto ? <FaXmark className="text-base" /> : <FaBars className="text-base" />}
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Header
