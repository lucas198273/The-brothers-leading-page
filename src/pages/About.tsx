import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Helmet>
        {/* 🔹 SEO PRINCIPAL */}
        <title>Sobre Wesley Oliveira | Violoncelista Profissional</title>
        <meta
          name="description"
          content="Conheça a trajetória do violoncelista Wesley Oliveira — músico profissional, intérprete sensível e artista com experiência em casamentos, eventos, gravações e projetos musicais."
        />
        <meta
          name="keywords"
          content="violoncelista, músico para casamento, música clássica, músico profissional, violoncelo para eventos, trilha sonora, músico Minas Gerais"
        />

        {/* 🔹 OPEN GRAPH */}
        <meta property="og:title" content="Sobre Wesley Oliveira | Violoncelista" />
        <meta
          property="og:description"
          content="Wesley Oliveira — violoncelista profissional, intérprete e artista com experiência em eventos, casamentos e projetos musicais."
        />
        <meta property="og:image" content="/assets/imgs/img3.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seudominio.com/about" />

      
        {/* 🔹 INDEXAÇÃO */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0f18] to-black text-white">
        {/* Hero Section */}
        <section className="w-full mt-4 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">
          {/* Text */}
          <div data-aos="fade-right" className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 tracking-tight">
              Sobre o Artista
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
              Wesley Oliveira é um violoncelista profissional reconhecido por suas
              apresentações emocionantes e pela sensibilidade musical única. Com anos
              de experiência, atua em eventos, casamentos, projetos musicais e
              performances solo, sempre trazendo intensidade e elegância a cada nota.
            </p>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="flex-1 flex justify-center">
            <img
              src="/assets/imgs/img3.webp"
              alt="Retrato do violoncelista Wesley Oliveira durante apresentação"
              className="h-[420px] w-auto object-cover rounded-xl shadow-[0_0_25px_rgba(0,102,255,0.4)] border border-blue-500/20"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-6 md:px-20 py-16 bg-black/40 backdrop-blur-md border-t border-blue-500/10">
          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-blue-300 mb-10 text-center"
          >
            Experiência Musical
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              data-aos="zoom-in"
              className="p-6 bg-[#0d1522] rounded-xl shadow-lg shadow-blue-700/20 border border-blue-500/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">Casamentos</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Performance emocionante e exclusiva para cerimônias e recepções.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="p-6 bg-[#0d1522] rounded-xl shadow-lg shadow-blue-700/20 border border-blue-500/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">Eventos</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Repertório versátil para eventos corporativos, festas e ocasiões especiais.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="p-6 bg-[#0d1522] rounded-xl shadow-lg shadow-blue-700/20 border border-blue-500/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">Projetos Musicais</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Participação em gravações, trilhas sonoras e colaborações artísticas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 py-20 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-blue-300 mb-6"
          >
            Quer contratar o violoncelista?
          </h2>
          <p data-aos="fade-up" className="text-gray-300 max-w-xl mx-auto mb-8">
            Entre em contato e leve uma apresentação inesquecível para o seu evento.
          </p>
          <Link
            data-aos="zoom-in"
            className="px-10 py-3 bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30 text-white font-bold rounded-lg"
            to="/contact"
          >
            Agendar apresentação
          </Link>
        </section>
      </div>
    </>
  );
}
