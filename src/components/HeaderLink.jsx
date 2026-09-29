function HeaderLink({href, texto}) {
    return (
        <li>
            <a 
            href={href}>
            {texto}

            </a>
        
        </li>
    )
}

export default HeaderLink