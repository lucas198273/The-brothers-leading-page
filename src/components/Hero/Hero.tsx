"use client";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Helmet>
        <title>The Brothers | Peça no iFood</title>
        <meta
          name="description"
          content="Peça The Brothers no iFood — entrega rápida, sabor artesanal e classicão sem mistério."
        />

        <meta property="og:title" content="The Brothers — Peça no iFood" />
        <meta
          property="og:description"
          content="Hambúrguer artesanal direto para sua casa. Confira nosso cardápio no iFood."
        />
        <meta property="og:image" content="/assets/imgs/burger-hero.webp" />
        <meta property="og:type" content="website" />\
      </Helmet>

      {/* SECTION RED + CLEAN */}
      <section id="home" className="relative w-full flex items-center justify-center px-4 py-20 md:py-32 bg-black text-white overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-12">
          {/* TEXTOS */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-red-600">
              Peça The Brothers
              <br /> no iFood.
            </h1>

            <p className="text-base md:text-lg text-white opacity-90 max-w-md leading-relaxed">
              Agora ficou ainda mais fácil receber seu hambúrguer artesanal com sabor direto ao ponto.
              Entrega rápida, qualidade total e aquele padrão Brothers que você já conhece.
            </p>

            <div className="flex flex-col space-y-2">
              <p className="text-base md:text-lg font-semibold text-red-600 opacity-90">
                Vermelho na essência. Branco na identidade.
              </p>
            </div>

            <a
              href="https://www.ifood.com.br/delivery/betim-mg/the-brothers-burguers-angola/24644122-0506-43a8-b9ac-839089919b85"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 opacity-90 hover:bg-red-500 transition-all shadow-md text-white font-semibold rounded-md"
            >
              Pedir no iFood
            </a>
            <a
              href="https://wa.me/5531992311011?text=https%3A%2F%2Fwww.ifood.com.br%2Fdelivery%2Fbetim-mg%2Fthe-brothers-burguers-angola%2F24644122-0506-43a8-b9ac-839089919b85"  
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 opacity-90 hover:bg-red-500 transition-all shadow-md text-white font-semibold rounded-md"
            >
              Pedir no Whatsapp
            </a>
          </div>

          {/* IMAGEM */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src="/assets/imgs/image.png"
              alt="The Brothers — Hambúrguer artesanal"
              className="w-[70%] max-w-md rounded-xl shadow-xl shadow-red-500/20 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}