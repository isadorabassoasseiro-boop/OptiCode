import { Link } from "react-router-dom";

function HeaderLink({ to, texto, onClick }) {
    return (
        <li>
            <Link
                to={to}
                onClick={onClick}
                className="block py-2 text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white md:py-0"
            >
                {texto}
            </Link>
        </li>
    )
}

export default HeaderLink
