function HeaderLink({ href, texto, onClick }) {
    return (
        <li>
            <a
                href={href}
                onClick={onClick}
                className="block py-2 text-xs font-medium tracking-wide text-ice/70 transition-colors duration-300 hover:text-ice md:py-0"
            >
                {texto}
            </a>
        </li>
    )
}

export default HeaderLink
