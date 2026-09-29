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
            href="#inicio"
            texto="Início"
          />

          <FooterLink
            href="#solucao"
            texto="Solução"
          />

          <FooterLink
            href="#publico-alvo"
            texto="Público-Alvo"
          />

          <FooterLink
            href="#galerias"
            texto="Galeria"
          />

          <FooterLink
            href="#equipe"
            texto="Nossa Equipe"
          />

        </FooterColuna>


        <FooterColuna titulo="PROJETO">

          <FooterLink
            href="#solucao"
            texto="Nossa Solução"
          />

          <FooterLink
            href="#publico-alvo"
            texto="Estudantes"
          />

          <FooterLink
            href="#galerias"
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