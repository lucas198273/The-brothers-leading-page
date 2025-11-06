// src/pages/ProductPage.tsx
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { products } from "../data/Product";

const ProductPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // 🔹 Agrupar categorias para exibir
  const sections = [
    { title: "Trabalhos - Israel", key: "israel" },
    { title: "Trabalhos - Brenda", key: "brenda" },
    { title: "Piercings", key: "piercing" },
  ];

  return (
    <div className="relative pt-24 bg-black text-white min-h-screen">
      <section className="px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-600">
          Galeria de Tatuagens & Piercings
        </h1>

        {sections.map((section) => (
          <div key={section.key} className="mb-16">
            <h2 className="text-2xl font-semibold text-center text-green-500 mb-8">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products
                .filter((p) => p.category === section.key)
                .map((p) => (
                  <div
                    key={p.id}
                    className="group bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-neutral-800 hover:border-green-700 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                        <button
                          className="px-5 py-2 bg-green-700 text-white font-medium rounded-full shadow-md hover:bg-green-600 transition-all duration-200"
                          onClick={() =>
                            window.open(
                              `https://wa.me/5531971705728?text=${encodeURIComponent(
                                `Olá! Gostei do trabalho "${p.name}". Gostaria de saber mais detalhes.`
                              )}`,
                              "_blank"
                            )
                          }
                        >
                          Consultar
                        </button>
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="text-lg font-medium text-gray-200 mb-2 line-clamp-2">
                        {p.name}
                      </h3>
                      {p.description && (
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {p.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default ProductPage;
