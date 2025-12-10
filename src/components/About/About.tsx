"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Helmet>
        <title>The Brothers | Quem Somos</title>
        <meta
          name="description"
          content="Conheça a história da The Brothers Burguer — qualidade, tradição e paixão por hambúrguer artesanal."
        />
      </Helmet>

      <section id="sobre" className="w-full bg-black  text-black py-2 px-2 flex justify-center">
        <div
          className="bg-black opacity-60 max-w-5xl w-[80%] rounded-[60px] p-6 md:p-12 flex flex-col md:flex-row items-center gap-10"
          data-aos="fade-up"
        >
          {/* IMAGEM */}
          <div className=" md:w-1/2 w-1/2 mt-14">
            <img
              src="/assets/imgs/logo.webp" // <-- substitua pela imagem real
              alt="Nossa hamburgueria"
              className="w-full h-auto rounded-[50px] object-cover"
            />
          </div>

          {/* TEXTO */}
          <div className="w-full md:w-1/2  text-black opacity-90">
            <h2
              className="text-4xl text-white md:text-4xl font-extrabold mb-6 tracking-wide"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              QUEM SOMOS
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-4 text-white opacity-90">
              Nossos primeiros passos foram em 2015, dentro de um trailer em
              Brasília. Rapidamente, o desejo de entregar um burger artesanal
              com qualidade e preço justo cruzou as fronteiras, chegando até
              Belo Horizonte e nos anos seguintes, no Rio de Janeiro, Goiânia e
              Fortaleza.
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Hoje são 20 lojas espalhadas pelo Brasil, com uma experiência
              incrível e refeições de saborear rezando. Amamos o que fazemos e
              somos focados em oferecer a melhor qualidade, com ingredientes
              frescos e uma receita preparada como só a gente sabe!
            </p>

           
          </div>
        </div>
      </section>
    </>
  );
}
