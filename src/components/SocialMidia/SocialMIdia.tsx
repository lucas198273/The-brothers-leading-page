import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SocialMediaSection: React.FC = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center no-font-boost">
          <img
            src="/assets/logo.webp"
            alt="Authentic Tattoo Studio"
            className="mx-auto mb-6 w-32 h-32 object-cover rounded-full border-4 border-[#556b2f] shadow-xl"
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#6b8e23] drop-shadow-md graffiti-font">
            Authentic Tattoo Studio
          </h2>

          <p className="mb-6 text-lg italic text-gray-300">
            Acompanhe nossos trabalhos, agendamentos e novidades nas redes sociais.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://www.instagram.com/italosoisa1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-110 text-[#6b8e23] hover:text-white"
            >
              <FaInstagram className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaSection;
