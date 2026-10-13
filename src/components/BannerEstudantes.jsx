// Vídeo de fundo do banner (em loop, sem som).
const VIDEO_FUNDO = "./imagens/video_Estudantes.mp4";

const BannerEstudantes = () => {
    return (

        <div className="absolute inset-0 overflow-hidden bg-deep">

            <video
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={VIDEO_FUNDO}
                autoPlay
                muted
                loop
                playsInline
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-[#020A1D]/80 via-transparent to-[#020A1D]"
            />

        </div>
    );
};

export default BannerEstudantes;
