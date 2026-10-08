function HeaderLink({ href, texto, onClick }) {
    return (
        <li>
            <a
                href={href}
                onClick={onClick}
                className="block py-2 text-sm font-medium tracking-wide text-neutral-700 transition-colors duration-300 hover:text-black md:py-0"
            >
                {texto}
            </a>
        </li>
    )
}

export default HeaderLink
