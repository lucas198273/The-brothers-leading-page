"use client";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Helmet>
        <title>The Brothers | Hamburgueria Artesanal</title>
        <meta
          name="description"
          content="The Brothers — Hambúrguer artesanal na Rua do Rosário, 1091. Sabor forte, clássico e direto ao ponto."
        />

        <meta property="og:title" content="The Brothers | Hambúrguer Artesanal" />
        <meta
          property="og:description"
          content="Experiência gastronômica autêntica, clara e impactante. Rua do Rosário, 1091."
        />
        <meta property="og:image" content="/assets/imgs/burger-hero.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO CLEAN / BRANCO + VERMELHO */}
      <section className="relative w-full flex items-center justify-center px-4 py-20 md:py-32 bg-white text-black overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-12">
          {/* TEXTOS */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-red-600">
              Hambúrguer artesanal,
              <br /> sem mistério.
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
              A The Brothers traz uma proposta clara: sabor real, receita artesanal e qualidade do início ao fim.
              Estamos na Rua do Rosário, 1091 — vem viver a experiência.
            </p>

            <p className="text-base md:text-lg font-semibold text-red-600">
              Vermelho na essência. Branco na identidade.
            </p>

            <Link
              to="/contact"
              className="px-8 py-3 bg-red-600 hover:bg-red-500 transition-all shadow-md text-white font-semibold rounded-md"
            >
              Fazer pedido
            </Link>
          </div>

          {/* IMAGEM */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src="/assets/imgs/image.png"
              alt="Hambúrguer artesanal The Brothers"
              className="w-[70%] max-w-md rounded-xl shadow-xl shadow-red-500/20 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* MODAL */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
            <div className="bg-white border border-red-600 text-black rounded-xl p-6 w-full max-w-md shadow-xl relative animate-[scale_0.3s_ease-in-out]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-red-600 hover:text-red-800 text-2xl"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center text-red-600">
                Fale com a The Brothers
              </h3>

              <p className="text-gray-700 text-center mb-4">
                Contato para pedidos, eventos e combos especiais.
              </p>

              <a
                href="https://wa.me/5531971705728"
                target="_blank"
                className="block w-full text-center py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition-all"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
