import { Link } from "react-router-dom";

function FooterLink({ to, texto }) {
  return (
    <li>
      <Link to={to}>
        {texto}
      </Link>
    </li>
  );
}

export default FooterLink;
