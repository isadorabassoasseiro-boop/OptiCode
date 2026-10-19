import FooterLink from "./FooterLink";
import FooterColuna from "./FooterColuna";

const Footer = () => {
  return (
    <footer id="footer">

      <div className="rodape">

        <div className="marcaRodape">

          <div className="logoRodape">

            <i
              className="bx bxs-bolt"
              aria-hidden="true"
            ></i>

            <h2>
              OPTI<span>CODE</span>
            </h2>

          </div>

          <p className="descricaoRodape">
            Tecnologia que conecta.
            <br />
            Inovação que transforma.
          </p>

        </div>


        <FooterColuna titulo="NAVEGAÇÃO">

          <FooterLink
            to="/"
            texto="Início"
          />

          <FooterLink
            to="/sobre"
            texto="Solução"
          />

          <FooterLink
            to="/sobre"
            texto="Público-Alvo"
          />

          <FooterLink
            to="/"
            texto="Galeria"
          />

          <FooterLink
            to="/suporte"
            texto="Nossa Equipe"
          />

        </FooterColuna>


        <FooterColuna titulo="PROJETO">

          <FooterLink
            to="/sobre"
            texto="Nossa Solução"
          />

          <FooterLink
            to="/sobre"
            texto="Estudantes"
          />

          <FooterLink
            to="/"
            texto="Smartphone JOVI"
          />

        </FooterColuna>


        <div className="colunaRodape contatoRodape">

          <h3>CONTATO</h3>

          <p>
            <i
              className="bx bx-envelope"
              aria-hidden="true"
            ></i>

            contato@opticode.com
          </p>

          <p>
            <i
              className="bx bx-map"
              aria-hidden="true"
            ></i>

            São Paulo - SP
          </p>

        </div>

      </div>


      <div className="rodapeFinal">

        <p>
          © 2026 OPTICODE. Todos os direitos reservados.
        </p>

        <p>
          Challenge JOVI
        </p>

      </div>

    </footer>
  );
};

export default Footer;