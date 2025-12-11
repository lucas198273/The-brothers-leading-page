"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF7F0] border-b border-red-100 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
{/* LOGO + FUNDO PRETO */}
<div
  className="
    rounded-2xl h-16 bg-black 
    w-full sm:w-[90%] md:w-[30%] mr-3
    flex items-center justify-center gap-4
    px-3 md:px-4 py-2
  "
>
  {/* LOGO TEXTO */}
  <Link
    to="/"
    translate="no"
    className="text-lg md:text-xl font-extrabold tracking-wide text-white whitespace-nowrap"
  >
    THE BROTHERS
  </Link>


</div>

        {/* MENU DESKTOP */}
        <nav
          className="
            hidden md:flex items-center 
            gap-6 lg:gap-8 
            font-semibold text-red-900
          "
        >
          <a
            href="#unidade"
            className="hover:text-red-600 transition text-sm lg:text-base"
          >
            UNIDADES
          </a>

          <a
            href="#cardapio"
            className="hover:text-red-600 transition text-sm lg:text-base"
          >
            CARDÁPIO
          </a>

          <a
            href="#sobre"
            className="hover:text-red-600 transition text-sm lg:text-base"
          >
            QUEM SOMOS
          </a>

          {/* DELIVERY */}
          <a
            href="https://oia.99app.com/dlp9/9HkZ0K?area=BR"
            target="_blank"
            className="
              bg-red-600 opacity-90 text-white 
              px-3 py-2 
              rounded-full font-bold shadow-md 
              hover:bg-red-600 transition 
              flex items-center gap-2
              text-sm lg:text-base
            "
          >
            🚴 DELIVERY
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5531987741463?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20hamburgueria%20e%20gostaria%20de%20fazer%20um%20pedido.%20%0AAcesse%20nosso%20iFood:%20https%3A%2F%2Fwww.ifood.com.br%2Fdelivery%2Fbetim-mg%2Fthe-brothers-burguers-angola%2F24644122-0506-43a8-b9ac-839089919b85"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-red-700 text-white 
              px-3 py-2 
              rounded-full font-bold shadow-md 
              hover:bg-red-600 transition 
              flex items-center gap-2
              text-sm lg:text-base
            "
          >
            Pedir no WhatsApp
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden p-2 text-red-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-[#FFF7F0] border-t border-red-100 px-6 py-5 flex flex-col gap-6 text-lg font-semibold text-red-900">

          <a href="#unidade" className="hover:text-red-600 transition">UNIDADES</a>
          <a href="#cardapio" className="hover:text-red-600 transition">CARDÁPIO</a>
          <a href="#sobre" className="hover:text-red-600 transition">QUEM SOMOS</a>

          {/* DELIVERY */}
          <a
            href="https://www.ifood.com.br/delivery/betim-mg/the-brothers-burguers-angola/24644122-0506-43a8-b9ac-839089919b85"
            target="_blank"
            className="
              bg-red-600 opacity-90 
              text-white px-6 py-3 
              rounded-full font-bold shadow-md 
              hover:bg-red-600 transition 
              flex items-center gap-2
            "
          >
            🚴 DELIVERY
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5531987741463?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20hamburgueria%20e%20gostaria%20de%20fazer%20um%20pedido.%20%0AAcesse%20nosso%20iFood:%20https%3A%2F%2Fwww.ifood.com.br%2Fdelivery%2Fbetim-mg%2Fthe-brothers-burguers-angola%2F24644122-0506-43a8-b9ac-839089919b85"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-red-700 
              text-white px-6 py-3 
              rounded-full font-bold shadow-md 
              hover:bg-red-600 transition 
              flex items-center gap-2
            "
          >
            Pedir no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
