import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { products } from "../../data/Product";

interface CategorySectionProps {
  category: "israel" | "brenda" | "piercing";
}

export default function CategorySection({ category }: CategorySectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const whatsappNumbers: Record<"israel" | "brenda" | "piercing", string> = {
    israel: "5531971705728",
    brenda: "5531971393567",
    piercing: "5531971132386",
  };

  const categoryTitles: Record<"israel" | "brenda" | "piercing", string> = {
    israel: "Trabalhos Israel",
    brenda: "Trabalhos Brenda",
    piercing: "Trabalhos Piercing",
  };

  const handleWhatsApp = () => {
    const phone = whatsappNumbers[category];
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de agendar um horário com ${categoryTitles[category].replace("Trabalhos ", "")}.`
    );
    const whatsappLink = `https://wa.me/${phone}?text=${mensagem}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="mb-20">
      {/* 🔹 Título da seção */}
      <h3
        className="text-4xl font-bold text-center text-[#4A5D23] mb-10 tracking-wide"
        data-aos="fade-up"
      >
        {categoryTitles[category]}
      </h3>

      {/* 🔹 Galeria de imagens */}
      <div className="relative" data-aos="fade-up">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="flex-none w-[65%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="rounded-xl overflow-hidden h-[360px] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Botões de navegação */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#4A5D23] text-white p-2 rounded-full z-10 hover:bg-[#3B4C1C] transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#4A5D23] text-white p-2 rounded-full z-10 hover:bg-[#3B4C1C] transition-all"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* 🔹 Botão WhatsApp abaixo */}
      <div className="flex justify-center mt-10" data-aos="fade-up">
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4A5D23] text-white font-semibold shadow-lg hover:bg-[#3B4C1C] transition-all duration-300"
        >
          <MessageCircle size={20} />
          Falar com {categoryTitles[category].replace("Trabalhos ", "")}
        </button>
      </div>
    </div>
  );
}
