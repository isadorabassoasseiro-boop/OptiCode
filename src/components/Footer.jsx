import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-8">
        <Link
          to="/"
          aria-label="OptiCode — Home"
          className="flex items-center"
        >
          <img
            src="./imagens/Logotipo%20OPTICODE%20em%20Branco.png"
            alt="OptiCode"
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <p className="text-sm text-white/60">
          © 2026 OPTICODE. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
