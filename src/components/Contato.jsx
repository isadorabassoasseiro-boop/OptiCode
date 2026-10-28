import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoSend } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import ContatoItem from "./ContatoItem";
import ContatoForm from "./ContatoForm";

const FORMSPREE_URL = (import.meta.env.VITE_FORMSPREE_URL || "").trim();

const Contato = () => {
    const [enviando, setEnviando] = useState(false);
    const [status, setStatus] = useState(null);

    const aoEnviar = async (evento) => {
        evento.preventDefault();

        if (!FORMSPREE_URL) {
            setStatus({
                tipo: "erro",
                mensagem: "Formulário ainda não configurado. Adicione a URL no arquivo .env.",
            });
            return;
        }

        setEnviando(true);
        setStatus(null);

        try {
            const resposta = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: new FormData(evento.target),
                headers: { Accept: "application/json" },
            });

            if (resposta.ok) {
                setStatus({
                    tipo: "sucesso",
                    mensagem: "Mensagem enviada com sucesso! Em breve retornaremos o contato.",
                });
                evento.target.reset();
            } else {
                setStatus({
                    tipo: "erro",
                    mensagem: "Não foi possível enviar a mensagem. Tente novamente.",
                });
            }
        } catch {
            setStatus({
                tipo: "erro",
                mensagem: "Erro de conexão. Verifique sua internet e tente novamente.",
            });
        } finally {
            setEnviando(false);
        }
    };

    return (
        <section id="contato" className="scroll-mt-16 bg-black px-5 pb-16 pt-12 md:px-10 lg:pb-24 lg:pt-20">

            {/* Cabeçalho — centralizado nas duas versões */}
            <header className="mx-auto mb-8 max-w-3xl text-center lg:mb-9">

                <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.3em] text-azure lg:mb-3 lg:text-xs lg:text-white/70">CONTATO</p>

                <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl lg:text-ice">
                    FALE COM A NOSSA EQUIPE
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-ice/90 sm:text-sm lg:mt-4 lg:text-base lg:text-white/80">
                    Tem alguma dúvida sobre a OPTICODE ou sobre nossa solução?
                    Entre em contato com a nossa equipe.
                </p>

            </header>

            {/* MOBILE: uma coluna (informações em cima, formulário embaixo) */}
            {/* DESKTOP (lg+): duas colunas (formulário à esquerda, informações à direita) */}
            <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-11">

                {/* Informações — primeiro no mobile, à direita no desktop */}
                <div className="min-w-0 lg:order-2">

                    <h3 className="text-lg font-extrabold text-white lg:text-2xl">ENTRE EM CONTATO</h3>

                    <p className="mt-2 text-xs leading-relaxed text-white/80 lg:mt-4 lg:text-sm">
                        Estamos disponíveis para responder dúvidas,
                        receber sugestões e conversar sobre o projeto.
                    </p>

                    <address className="mt-5 flex flex-col gap-3 not-italic lg:mt-8 lg:gap-5">

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
                            texto="Segunda a Sexta-feira"

                        />

                    </address>

                </div>

                {/* Formulário — abaixo das informações no mobile, à esquerda no desktop */}
                <form
                    onSubmit={aoEnviar}
                    className="flex min-w-0 flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-5 lg:order-1 lg:gap-5 lg:rounded-2xl lg:p-7"
                >

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

                    {/* Botão do tamanho do conteúdo nas duas versões */}
                    <button
                        type="submit"
                        disabled={enviando}
                        className="mt-1 flex w-fit items-center justify-center gap-2 rounded-md bg-azure px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-azure/30 disabled:cursor-not-allowed disabled:opacity-60 lg:rounded-lg lg:py-3 lg:text-sm"
                    >

                        {enviando ? "ENVIANDO..." : "ENVIAR MENSAGEM"}

                        {/* Ícone de envio no mobile, seta no desktop */}
                        <IoSend className="lg:hidden"/>
                        <FaArrowRight className="hidden lg:block"/>

                    </button>

                    {status && (
                        <p
                            className={
                                status.tipo === "sucesso"
                                    ? "rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300"
                                    : "rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300"
                            }
                        >
                            {status.mensagem}
                        </p>
                    )}

                </form>

            </div>

        </section>
    )
}

export default Contato
