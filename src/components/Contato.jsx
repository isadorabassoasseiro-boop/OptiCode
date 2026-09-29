import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import ContatoItem from "./ContatoItem";
import ContatoForm from "./ContatoForm";

const Contato = () => {
    return (
        <section id="contato">

            <div className="topoSecao5">

                <p className="label5">CONTATO</p>

                <h2>FALE COM A NOSSA EQUIPE</h2>

                <p className="descricao4">
                    Tem alguma dúvida sobre a OPTICODE ou sobre nossa solução?
                    Entre em contato com a nossa equipe.
                </p>

            </div>

            <div className="caixaContato">

                <div className="infoContato">

                    <h3>ENTRE EM CONTATO</h3>

                    <p className="textoContato">
                        Estamos disponíveis para responder dúvidas,
                        receber sugestões e conversar sobre o projeto.
                    </p>

                    <address className="listaContato">

                        <ContatoItem
                            Icone={MdOutlineEmail}
                            titulo="E-MAIL"
                            texto="contato@opticode.com.br"

                        />

                        <ContatoItem
                            Icone={IoLocationOutline}
                            titulo="LOCALIZAÇÃO"
                            texto="São Paulo - SP"

                        />

                        <ContatoItem
                            Icone={GoClock}
                            titulo="ATENDIMENTO"
                            texto="Segunda a Sexta-feira<"

                        />
                    </address>

                </div>

                <form className="formulario">

                    <ContatoForm
                        label="Nome"
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                    />

                    <ContatoForm
                        label="E-mail"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                    />

                    <ContatoForm
                        label="Assunto"
                        type="text"
                        id="assunto"
                        name="assunto"
                        placeholder="Digite o assunto"
                    />

                    <ContatoForm
                        label="Mensagem"
                        id="mensagem"
                        name="mensagem"
                        placeholder="Digite sua mensagem"
                        textarea={true}
                    />

                    <button type="submit" className="botao">

                        ENVIAR MENSAGEM

                        <IoSend/>

                    </button>

                </form>

            </div>

        </section>
    )
}

export default Contato