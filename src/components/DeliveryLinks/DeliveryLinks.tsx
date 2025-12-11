"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DeliveryLinks() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <section id="plataformas" className="w-full  bg-black text-white py-20 px-6 flex justify-center">
      <div className="mt-4 max-w-5xl w-full flex flex-col items-center text-center space-y-10">

        {/* Título */}
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
          data-aos="fade-up"
        >
          Peça Agora
        </h2>

        <p
          className="text-lg opacity-90 max-w-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Escolha sua plataforma preferida e receba seu hambúrguer artesanal com toda
          qualidade The Brothers.
        </p>

        {/* BLOCOS DOS APPS */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* iFood */}
          <a
            href="https://www.ifood.com.br/delivery/betim-mg/the-brothers-burguers-angola/24644122-0506-43a8-b9ac-839089919b85"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group bg-white  text-black px-8 py-6 rounded-2xl shadow-lg hover:shadow-gray-500/40 
              transition-all flex flex-col items-center w-64
            "
          >
            <img
              src="/assets/imgs/logos/ifood.png"
              alt="iFood"
              className="w-28 mb-3 float pulse group-hover:scale-110 transition-transform"
            />
            <span className="font-semibold text-lg">Peça no iFood</span>
          </a>

          {/* 99Food */}
          <a
            href="https://oia.99app.com/dlp9/9HkZ0K?area=BR"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group bg-yellow-500 text-black px-8 py-6 rounded-2xl shadow-lg hover:shadow-yellow-500/40 
              transition-all flex flex-col items-center w-64
            "
          >
            <img
              src="/assets/imgs/logos/99Food.png"
              alt="99Food"
              className="w-28 mb-3 float pulse group-hover:scale-110 transition-transform"
            />
            <span className="font-semibold text-lg">Peça no 99Food</span>
          </a>
        </div>
      </div>
    </section>
  );
}
