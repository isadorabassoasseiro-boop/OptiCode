import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
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
        <section id="contato" className="scroll-mt-16 bg-black px-6 pb-24 pt-20 md:px-10">

            {/* Cabeçalho — centralizado nas duas versões */}
            <header className="mx-auto mb-10 max-w-3xl text-center">

                <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-white lg:text-white/70">CONTATO</p>

                <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-ice">
                    FALE COM A NOSSA EQUIPE
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
                    Tem alguma dúvida sobre a OPTICODE ou sobre nossa solução?
                    Entre em contato com a nossa equipe.
                </p>

            </header>

            {/* MOBILE: uma coluna (informações em cima, formulário embaixo) */}
            {/* DESKTOP (lg+): duas colunas (formulário à esquerda, informações à direita) */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

                {/* Informações — primeiro no mobile, à direita no desktop */}
                <div className="min-w-0 lg:order-2">

                    <h3 className="text-2xl font-extrabold text-white">ENTRE EM CONTATO</h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/80">
                        Estamos disponíveis para responder dúvidas,
                        receber sugestões e conversar sobre o projeto.
                    </p>

                    <address className="mt-10 flex flex-col gap-7 not-italic">

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
                    className="flex min-w-0 flex-col gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8 lg:order-1"
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

                    {/* Largura total no mobile, tamanho do conteúdo no desktop */}
                    <button
                        type="submit"
                        disabled={enviando}
                        className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-azure px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-azure/30 disabled:cursor-not-allowed disabled:opacity-60 lg:w-fit"
                    >

                        {enviando ? "ENVIANDO..." : "ENVIAR MENSAGEM"}

                        <FaArrowRight/>

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
