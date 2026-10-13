// A foto de fundo do banner será adicionada posteriormente:
// basta preencher IMAGEM_FUNDO com o caminho do arquivo
// (ex.: "./imagens/foto.jpg").
const IMAGEM_FUNDO = "./imagens/estudante.jpg";

const BannerEstudantes = () => {
    return (

        <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pb-44 pt-32 text-center">

            {IMAGEM_FUNDO ? (
                <img
                    src={IMAGEM_FUNDO}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
            ) : (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-br from-navy via-deep to-[#020A1D]"
                />
            )}

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-[#020A1D]/80 via-transparent to-[#020A1D]"
            />

            <div className="relative z-10 max-w-3xl">

                <h2 className="text-4xl font-extrabold leading-tight text-[#F1FAEE] md:text-6xl">
                    Pensado em estudantes
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#C4CCE0] md:text-lg">
                    A solução é voltada para estudantes que utilizam o
                    smartphone como ferramenta de apoio na rotina acadêmica,
                    seja para estudar, registrar conteúdos, realizar
                    trabalhos ou se organizar.
                </p>

            </div>

        </div>
    );
};

export default BannerEstudantes;
