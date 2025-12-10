"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF7F0] border-b border-red-100 fixed top-0 left-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
    
<div className="rounded-2xl h-16 bg-black w-full md:w-[40%] flex items-center gap-4 px-4 py-2">
  {/* LOGO TEXTO */}
  <Link
    to="/"
    className="text-1xl font-extrabold tracking-wide text-white whitespace-nowrap"
  >
    THE BROTHERS
  </Link>

  {/* LOGOS */}
  <img
    src="/assets/imgs/logo.webp"
    alt="The Brothers Logo"
    className="w-14 h-14 object-contain float"
  />

  <img
    src="/assets/imgs/logo2.webp"
    alt="The Brothers Logo"
    className="w-14 h-14 object-contain float"
  />
</div>



        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-red-900">
          <a href="#unidade" className="hover:text-red-600 transition">UNIDADES</a>
          <a href="#cardapio" className="hover:text-red-600 transition">CARDÁPIO</a>
          <a href="#sobre" className="hover:text-red-600 transition">QUEM SOMOS</a>

          {/* BOTÃO DELIVERY */}
          <a
            href="https://www.ifood.com.br/delivery/betim-mg/the-brothers-burguers-angola/24644122-0506-43a8-b9ac-839089919b85"
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
          <a href="#unidade" className="hover:text-red-600 transition">UNIDADES</a>
          <a href="#cardapio" className="hover:text-red-600 transition">CARDÁPIO</a>
          <a href="#sobre" className="hover:text-red-600 transition">QUEM SOMOS</a>

        <a
            href="https://www.ifood.com.br/delivery/betim-mg/the-brothers-burguers-angola/24644122-0506-43a8-b9ac-839089919b85"
            target="_blank"
            className="bg-red-600 opacity-90 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-red-600 transition flex items-center gap-2"
          >
            🚴 DELIVERY
          </a>
              <a
              href="https://wa.me/5531992311011?text=https%3A%2F%2Fwww.ifood.com.br%2Fdelivery%2Fbetim-mg%2Fthe-brothers-burguers-angola%2F24644122-0506-43a8-b9ac-839089919b85"  
              target="_blank"
              rel="noopener noreferrer"
            className="bg-red-600 opacity-90 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-red-600 transition flex items-center gap-2"

            >
              Pedir no Whatsapp
            </a>
        </div>
      )}
    </header>
  );
}
