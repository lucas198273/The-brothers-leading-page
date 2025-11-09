"use client";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    tipoServico: "",
    data: "",
    hora: "",
  });

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar uma sessão:\n
Nome: ${form.nome}\n
Telefone: ${form.telefone}\n
Tipo de serviço: ${form.tipoServico}\n
Data: ${form.data}\n
Hora: ${form.hora}`;
    window.open(`https://wa.me/5531971705728?text=${encodeURIComponent(msg)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Authentic Studio | Tatuagens e Piercings</title>
        <meta
          name="description"
          content="Arte e autenticidade em cada traço — agende sua sessão no Authentic Studio."
        />
        <meta
          name="keywords"
          content="tatuagem, piercing, estúdio de tatuagem, Authentic Studio, arte corporal"
        />
      </Helmet>

      {/* 🔹 Hero Section com fundo em degradê */}
      <section
        className="relative w-full text-black flex items-center justify-center px-4 py-20 md:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #e5ecd9 40%, #4A5D23 100%)",
        }}
      >
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-10">
          {/* 🔸 Texto */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-5"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-sm">
              A autenticidade é <br /> a sua marca.
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
              Tatuagens e piercings feitos com técnica, estilo e personalidade. 
              Confira nossos trabalhos de{" "}
              <a
                href="#tatuagens"
                className="text-[#4A5D23] font-semibold hover:underline transition-colors duration-200"
              >
                visualizar tatuagens
              </a>{" "}
              e{" "}
              <a
                href="#piercings"
                className="text-[#4A5D23] font-semibold hover:underline transition-colors duration-200"
              >
                visualizar piercings
              </a>.
            </p>

            <p className="text-base md:text-lg text-gray-700 font-semibold">
              📍 Betim - MG <br /> Av. Amazonas nº608
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 bg-[#4A5D23] hover:bg-[#3B4C1C] transition-all shadow-lg text-white font-semibold rounded-md hover:shadow-xl"
            >
              Agendar Sessão
            </button>
          </div>

          {/* 🔸 Imagens com AOS e animações */}
          <div
            className="w-full md:w-1/2 flex justify-center relative gap-4"
            data-aos="fade-left"
          >
            <img
              src="/assets/israel/img-i1.webp"
              alt="Artista tatuador"
              className="w-[45%] sm:w-[40%] max-w-xs rounded-lg shadow-xl transform -rotate-6 translate-x-6 md:translate-x-8 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/assets/brenda/img-b1.webp"
              alt="Trabalho artístico"
              className="w-[45%] sm:w-[40%] max-w-xs rounded-lg shadow-xl transform rotate-6 -translate-x-6 md:-translate-x-8 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* 🔹 Modal de Agendamento */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div
              className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative animate-[scale_0.3s_ease-in-out]"
              data-aos="zoom-in"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                aria-label="Fechar formulário"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold mb-4 text-black text-center">
                Agendar Sessão
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "nome", label: "Nome completo", type: "text", placeholder: "Digite seu nome completo" },
                  { id: "telefone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={(form as any)[field.id]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                {/* Tipo de serviço */}
                <div>
                  <label
                    htmlFor="tipoServico"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Tipo de serviço
                  </label>
                  <select
                    id="tipoServico"
                    name="tipoServico"
                    value={form.tipoServico}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"
                  >
                    <option value="">Selecione</option>
                    <option value="Tatuagem">Tatuagem</option>
                    <option value="Piercing">Piercing</option>
                  </select>
                </div>

                {/* Data e hora */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="data"
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      Data
                    </label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={form.data}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hora"
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      Hora
                    </label>
                    <input
                      type="time"
                      id="hora"
                      name="hora"
                      value={form.hora}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4A5D23] hover:bg-[#3B4C1C] transition-all shadow-md rounded-lg text-white font-semibold"
                >
                  Enviar no WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
