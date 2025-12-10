"use client";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 opacity-90">

        {/* SOBRE */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-red-600 opacity-90">The Brothers</h3>
          <p className="text-sm leading-relaxed text-gray-200 opacity-90">
            Há 12 anos oferecendo hambúrguer artesanal com ingredientes frescos,
            sabor marcante e preparo dedicado. Qualidade e tradição em cada pedido.
          </p>

          {/* Redes sociais */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/thebrothersbetim/"
              target="_blank"
              className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition opacity-90"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5531992311011?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20hamburgueria%20e%20gostaria%20de%20fazer%20um%20pedido.%20%0AAcesse%20nosso%20iFood:%20https%3A%2F%2Fwww.ifood.com.br%2Fdelivery%2Fbetim-mg%2Fthe-brothers-burguers-angola%2F24644122-0506-43a8-b9ac-839089919b85"
              target="_blank"
              className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition opacity-90"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>


        {/* CONTATO */}
        <div className="flex flex-col gap-4 opacity-90">
          <h3 className="text-xl font-semibold text-red-600 opacity-90">Contato</h3>

          <div className="flex items-center gap-3 text-gray-200">
            <FaMapMarkerAlt className="text-red-600 opacity-90 " />
            <span>Rua do Rosário, 1091 — Betim/MG</span>
          </div>

          <div className="flex items-center gap-3 text-gray-200 opacity-90">
            <FaEnvelope className="text-red-600 opacity-90" />
            <span>email@thebrothers.com</span>
          </div>

          <div className="flex items-center gap-3 text-gray-200 opacity-90">
            <FaWhatsapp className="text-red-600 opacity-90" />
            <span>(031) 987741463</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-red-600 opacity-90 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} The Brothers — Todos os direitos reservados.
      </div>
    </footer>
  );
}
