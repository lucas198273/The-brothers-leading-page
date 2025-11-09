import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-20 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2 mr-2 md:hidden z-10"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu desktop - esquerda */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300 text-sm lg:text-base font-medium">
          <Link to="/" className="hover:text-white transition-colors">Início</Link>
          <Link to="/about" className="hover:text-white transition-colors">Sobre</Link>
          <Link to="/products" className="hover:text-white transition-colors">Tatuagens</Link>
        </nav>

        {/* Logo centralizada */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          data-aos="fade-up"
        >
          <img
            src="/assets/logo.webp"
            alt="Soisa Tattoo Studio"
            className="w-24 sm:w-28 md:w-32 object-contain brightness-200"
          />
        </div>

        {/* Menu desktop - direita */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300 text-sm lg:text-base font-medium">
          <Link to="/politicas" className="hover:text-white transition-colors">Políticas</Link>
        </nav>
      </div>

      {/* Menu mobile */}
      <nav
        className={`md:hidden fixed top-20 left-0 w-full bg-black text-white backdrop-blur-sm shadow-md z-40 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {[
          { to: "/", label: "Início" },
          { to: "/about", label: "Sobre" },
          { to: "/products", label: "Tatuagens e Piercings" },
          { to: "/politicas", label: "Políticas" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
