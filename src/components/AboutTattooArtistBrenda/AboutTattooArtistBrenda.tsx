import { useState } from "react";
import { toast } from "react-toastify";

export default function AboutTattooArtistBrenda() {
  const [isClicked, setIsClicked] = useState(false);

  const handleWhatsAppClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      const message = encodeURIComponent(
        "Olá! Tenho interesse em agendar uma tatuagem com a tatuadora Brenda. Pode me ajudar?"
      );
      const whatsappLink = `https://wa.me/5531971393567?text=${message}`;
      window.open(whatsappLink, "_blank");
      toast.info("Mensagem enviada para o WhatsApp!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => setIsClicked(false), 3000);
    }
  };

  return (
    <section className="bg-black border-t-4 border-[#556B2F] py-12 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagem da tatuadora */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/brenda/img-brenda.webp" // 🔹 Substitua pela imagem real da Brenda
            alt="Tatuadora Brenda"
            className="max-w-xs md:max-w-md rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out border border-[#556B2F]/30"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto de apresentação */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#9ACD32] mb-5">
            Brenda — Traços Finos & Arte com Alma
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Brenda é especialista em traços delicados e tatuagens que unem
            sensibilidade e técnica. Cada projeto é pensado com cuidado, trazendo
            à pele um toque artístico que valoriza a beleza e o significado de cada detalhe.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-block bg-[#556B2F] text-white font-semibold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#6B8E23] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9ACD32] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
            disabled={isClicked}
          >
            Agendar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
