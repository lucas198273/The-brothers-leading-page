import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-16 border-t border-[#4A5D23]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 🔹 Nome / Logo */}
        <h2 className="text-2xl font-bold drop-shadow-sm text-[#4A5D23] tracking-wide">
         Authentic Tattoo
        </h2>

        {/* 🔹 Ícones sociais */}
        <div className="flex space-x-6 text-2xl items-center">
          <a
            href="https://www.instagram.com/italosoisa1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4A5D23] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/5531971705728?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20tatuagem.%20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4A5D23] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* 🔹 Linha divisória e créditos */}
      <div className="border-t border-[#4A5D23]/30 mt-6 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#4A5D23] font-semibold">Authentic</span>.  
        Todos os direitos reservados.
      </div>
    </footer>
  );
}
