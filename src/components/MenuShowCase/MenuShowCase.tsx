"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MenuShowcase() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  const items = [
    { name: "Central Perk", image: "/assets/imgs/MENU1.jpg" },
    { name: "Dexter", image: "/assets/imgs/MENU2.jpg" },
    { name: "Maskara", image: "/assets/imgs/MENU3.jpg" },
    { name: "Olimpo", image: "/assets/imgs/MENU4.jpg" },
  ];

  return (
    <section
      id="cardapio"
      className="w-full mt-0 bg-black py-20 px-4 flex flex-col items-center text-white"
    >
      {/* TÍTULO */}
      <h2
        className="text-4xl mt-4 md:text-6xl font-extrabold text-red-600 opacity-80 mb-12 tracking-wide"
        data-aos="fade-up"
      >
        CARDÁPIO
      </h2>

      {/* GRID */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl"
        data-aos="fade-up"
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="float rounded-2xl overflow-hidden shadow-lg bg-red-600 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {/* ÁREA VERMELHA COM IMAGEM */}
            <div className="w-full h-56 bg-red-600 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BASE CREME */}
            <div className="bg-[#F8EDE4] w-full py-6 text-center">
              <h3 className="text-lg font-extrabold text-[#5A1E0B] tracking-wide">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO IFOOD — AQUI É O LUGAR CERTO */}
      <div className="mt-12 flex items-center">
        <a
          href="https://www.ifood.com.br/delivery/betim-mg/the-brothers-burguers-angola/24644122-0506-43a8-b9ac-839089919b85"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-red-600 opacity-90 hover:bg-red-500 transition-all shadow-md text-white font-semibold rounded-md"
        >
          Ver cardápio no iFood
        </a>
      </div>
    </section>
  );
}
