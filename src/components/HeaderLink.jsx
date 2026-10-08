function HeaderLink({ href, texto, onClick }) {
    return (
        <li>
            <a
                href={href}
                onClick={onClick}
                className="block py-2 text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white md:py-0"
            >
                {texto}
            </a>
        </li>
    )
}

export default HeaderLink
