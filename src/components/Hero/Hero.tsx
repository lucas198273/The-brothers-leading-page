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
        <meta property="og:image" content="/assets/imgs/logo.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* SECTION RED + CLEAN */}
      <section id="home" className="relative w-full flex items-center justify-center px-10 py-20 md:py-32 bg-black text-white overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-12">
          {/* TEXTOS */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            data-aos="fade-up"
          >
            <h1 translate="no" className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-wide">
              The Brothers
              <span translate="no" className="text-red-600 opacity-80"> Delivery</span>
            </h1>

            <p className="text-base md:text-lg text-white opacity-90 max-w-md leading-relaxed">
              Agora ficou ainda mais fácil receber seu hambúrguer artesanal com sabor direto ao ponto.
              Entrega rápida, qualidade total e aquele padrão Brothers que você já conhece.
            </p>
            <div className="flex  sm:flex-row gap-4 mt-4">
                  <img
                  src="/assets/imgs/logo.webp"
                  alt="The Brothers Logo"
                  className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 object-contain float pulse"
                />
                  {/* LOGO */}
                <img
                  src="/assets/imgs/logo2.webp"
                  alt="The Brothers Logo"
                  className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 object-contain float pulse"
                />
           </div>

        



          </div>

          {/* IMAGEM */}
          
        <div
  className="w-full md:w-1/2 flex justify-center float"
  data-aos="fade-left"
>
  <img
    src="/assets/imgs/image.png"
    alt="The Brothers — Hambúrguer artesanal"
    className="
     
      w-[85%]               /* MOBILE maior */
      sm:w-[90%]            /* TABLET leve ajuste */
      md:w-[90%]            /* DESKTOP */
      max-w-md
      rounded-xl shadow-xl shadow-amber-700
      object-cover
      transition-transform duration-300 hover:scale-105
    "
  />
</div>

        </div>
      </section>
    </>
  );
}