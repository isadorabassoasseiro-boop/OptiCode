import SolucaoCard from "./SolucaoCard";

const Solucao = () => {
    return (

        <section id="solucao" className="bg-night px-6 py-20 md:px-10 md:py-24">

            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-azure">
                    A SOLUÇÃO
                </p>

                <h2 className="font-brand text-3xl font-bold uppercase text-ice md:text-4xl">
                    Smartphone feito para você
                </h2>

            </div>

            {/* Grid 3 colunas: 2 cards à esquerda, 1 em foco no centro
                (ocupando as duas linhas) e 2 cards à direita */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:auto-rows-[300px] md:grid-cols-3">

                <SolucaoCard
                    className="min-h-[260px]"
                    titulo="Pós-processamento"
                    texto="Pós-processamento com IA, oferecendo maior controle
                        e reduzindo distorções indesejadas."
                />

                <SolucaoCard
                    className="min-h-[380px] md:row-span-2"
                    titulo="Fotografia"
                    texto="Assistência fotográfica integrada que estabiliza o software,
                        corrige granulação e melhora a imagem em tempo real."
                />

                <SolucaoCard
                    className="min-h-[260px]"
                    titulo="Shutter lag"
                    texto="Captura mais rápida e instantânea,
                        evitando a perda de momentos importantes."
                />

                <SolucaoCard
                    className="min-h-[260px]"
                    titulo="Arquivos e bugs"
                    texto="Sistema de salvamento mais robusto e confiável,
                        reduzindo falhas e perda de arquivos."
                />

                <SolucaoCard
                    className="min-h-[260px]"
                    titulo="Foco rápido"
                    texto="Foco rápido e preciso mesmo em diferentes
                        condições de iluminação."
                />

            </div>

        </section>
    )
}

export default Solucao
