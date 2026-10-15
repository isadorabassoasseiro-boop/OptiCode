import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaRegImage } from "react-icons/fa";

function GaleriaModal({ src, alt, aoFechar }) {

    // Trava a rolagem do fundo e fecha com a tecla Esc enquanto o modal está aberto.
    useEffect(() => {

        const fecharComEsc = (e) => {
            if (e.key === "Escape") aoFechar();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", fecharComEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", fecharComEsc);
        };
    }, [aoFechar]);

    // Portal no body: garante que o modal fique acima do header fixo.
    return createPortal(

        <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={aoFechar}
            className="fixed inset-0 z-50 flex items-center justify-center bg-night/60 p-6 backdrop-blur-sm animate-fundo-modal"
        >

            {/* Caixa ampliada — o clique dentro dela não fecha o modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-2xl bg-deep shadow-[0_24px_64px_rgba(0,0,0,0.55)] animate-caixa-modal"
            >
                {src ? (
                    <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    /* Placeholder: remover quando a prop `src` for usada */
                    <div
                        aria-hidden="true"
                        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-deep via-night to-deep"
                    >
                        <FaRegImage className="text-6xl text-ice/20" />
                    </div>
                )}
            </div>

        </div>,

        document.body
    );
}

export default GaleriaModal;
