import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/Product";
import { toast } from "react-toastify";

interface CategorySectionProps {
  category: "israel" | "brenda" | "piercing";
}

export default function CategorySection({ category }: CategorySectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // ✅ Mapeamento dos números por categoria
  const whatsappNumbers: Record<"israel" | "brenda" | "piercing", string> = {
    israel: "5531971705728",  // número de Israel
    brenda: "5531971393567",  // número de Brenda
    piercing: "5531971132386" // número responsável pelos piercings
  };

  const handleWhatsApp = (product: any) => {
    const phone = whatsappNumbers[category];
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no serviço "${product.name}". Gostaria de saber mais.`
    );
    const whatsappLink = `https://wa.me/${phone}?text=${mensagem}`;
    window.open(whatsappLink, "_blank");

    toast.info(`Mensagem enviada para o WhatsApp sobre ${product.name}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // ✅ Título dinâmico mais 
  const categoryTitles: Record<"israel" | "brenda" | "piercing", string> = {
    israel: "Israel",
    brenda: "Brenda",
    piercing: "Piercings",
  };

  return (
    <div className="mb-16">
      <h3
        className="text-3xl font-semibold text-center text-white mb-6 capitalize tracking-wide"
        data-aos="fade-up"
      >
        {categoryTitles[category]}
      </h3>

      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="flex-none w-[65%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="relative rounded-xl overflow-hidden h-[360px] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-70 flex justify-center">
                    <button
                      onClick={() => handleWhatsApp(item)}
                      className="px-4 py-2 rounded-lg font-semibold bg-[#4A5D23] text-white shadow-md hover:shadow-xl hover:bg-[#3B4C1C] transition-all duration-300"
                    >
                      Consultar Inspiração
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
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
    </div>
  );
}
