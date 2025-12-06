"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF7F0] border-b border-red-100 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
    
<div className="rounded-2xl h-24 bg-black w-full md:w-[40%] flex items-center gap-4 px-4 py-2">
  {/* LOGO TEXTO */}
  <Link
    to="/"
    className="text-2xl font-extrabold tracking-wide text-white whitespace-nowrap"
  >
    THE BROTHERS
  </Link>

  {/* LOGOS */}
  <img
    src="/assets/imgs/logo.webp"
    alt="The Brothers Logo"
    className="w-16 h-16 object-contain float"
  />

  <img
    src="/assets/imgs/logo2.webp"
    alt="The Brothers Logo"
    className="w-16 h-16 object-contain float"
  />
</div>



        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-red-900">
          <Link to="/" className="hover:text-red-600 transition">HOME</Link>
          <Link to="/unidades" className="hover:text-red-600 transition">UNIDADES</Link>
          <Link to="/cardapio" className="hover:text-red-600 transition">CARDÁPIO</Link>
          <Link to="/sobre" className="hover:text-red-600 transition">QUEM SOMOS</Link>

          {/* BOTÃO DELIVERY */}
          <a
            href="https://wa.me/5531971705728"
            target="_blank"
            className="bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-red-600 transition flex items-center gap-2"
          >
            🚴 DELIVERY
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 text-red-700 object-contain float"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#FFF7F0] border-t border-red-100 px-6 py-4 flex flex-col gap-5 text-lg font-semibold text-red-900">
          <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
          <Link to="/unidades" onClick={() => setOpen(false)}>UNIDADES</Link>
          <Link to="/cardapio" onClick={() => setOpen(false)}>CARDÁPIO</Link>
          <Link to="/sobre" onClick={() => setOpen(false)}>QUEM SOMOS</Link>

          <a
            href="https://wa.me/5531971705728"
            target="_blank"
            className="bg-red-700 text-white px-6 py-3 rounded-full text-center font-bold shadow-md hover:bg-red-600 transition"
          >
            🚴 DELIVERY
          </a>
        </div>
      )}
    </header>
  );
}
