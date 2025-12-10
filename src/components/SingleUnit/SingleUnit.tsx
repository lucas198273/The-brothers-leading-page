"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { FiMapPin, FiClock, FiPhone, FiFileText } from "react-icons/fi";

export default function SingleUnit() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Helmet>
        <title>The Brothers | Unidade</title>
        <meta
          name="description"
          content="Conheça nossa unidade oficial — localização, horário de funcionamento e contato."
        />
      </Helmet>

      <section id="unidade" className="w-full bg-black text-white py-20 px-4 flex flex-col items-center">
        
        {/* TÍTULO */}
        <h1
          className="text-5xl mt-3 md:text-7xl font-extrabold text-red-600 opacity-80 mb-6 tracking-wide"
          data-aos="fade-up"
        >
          UNIDADE
        </h1>

        {/* SUBTÍTULO */}
        <p
          className="text-lg md:text-xl text-gray-200 mb-12 text-center"
          data-aos="fade-up"
        >
          Informações completas da nossa hamburgueria
        </p>

        {/* WRAPPER */}
        <div
          className="flex flex-col md:flex-row gap-12 items-center w-full max-w-6xl"
          data-aos="fade-up"
        >
          {/* MAPA */}
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.50609977617!2d-44.19919878458363!3d-19.93315714356451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xXXXXXXXXXXX%3A0xXXXXXXXXXXXX!2sThe%20Brothers%20Hamburgueria!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="300"
              loading="lazy"
              className="rounded-2xl shadow-xl border border-orange-500/30"
            ></iframe>
          </div>

          {/* INFORMAÇÕES */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">

            <div className="flex items-center gap-3 text-lg">
              <FiMapPin className="text-orange-500 text-2xl" />
              <span>Rua do Rosário, 1091 — Betim/MG</span>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <FiClock className="text-orange-500 text-2xl" />
              <span>Aberto de 17:00 às 23:30</span>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <FiPhone className="text-orange-500 text-2xl" />
              <a href="tel:+5531999999999" className="hover:text-orange-400">
                (31) 9 9999-9999
              </a>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <FiFileText className="text-orange-500 text-2xl" />
              <a href="/cardapio" className="hover:text-orange-400">
                Cardápio
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
