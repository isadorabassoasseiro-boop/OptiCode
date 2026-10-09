function SolucaoCard({ titulo, texto, imagem, className = "" }) {
    return (
        <article
            className={`group relative isolate overflow-hidden rounded-2xl bg-deep ${className}`}
        >
            {/* Camada de mídia — escala suave no hover (efeito de seleção) */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                {imagem ? (
                    <img
                        src={imagem}
                        alt={titulo}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    /* Placeholder: remover quando a prop `imagem` for usada */
                    <div
                        aria-hidden="true"
                        className="h-full w-full bg-gradient-to-br from-deep via-night to-deep"
                    />
                )}
            </div>

            {/* Nome do diferencial por cima da imagem */}
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-night/90 via-night/40 to-transparent p-5 pt-12">
                <h3 className="font-brand text-base font-semibold uppercase tracking-[0.12em] text-ice">
                    {titulo}
                </h3>
            </div>

            {/* Card de informações — sobe de baixo no hover cobrindo a imagem */}
            <div className="absolute inset-0 z-20 flex translate-y-full flex-col justify-end gap-2 bg-neutral-900/70 p-5 backdrop-blur-lg transition-transform duration-500 ease-out group-hover:translate-y-0">
                <h3 className="font-brand text-base font-semibold uppercase tracking-[0.12em] text-ice">
                    {titulo}
                </h3>
                <p className="text-sm leading-relaxed text-ice/70">
                    {texto}
                </p>
            </div>
        </article>
    )
}

export default SolucaoCard
