import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";


import ScrollTop from "./components/ScrollTop/ScrollTop";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";

import { HelmetProvider, Helmet } from "react-helmet-async";
import PoliticaEPrivacidade from "./pages/PoliticasEPrivacidade";
import MenuShowCase from "./components/MenuShowCase/MenuShowCase";
import SingleUnit from "./components/SingleUnit/SingleUnit";
import InstagramGrid from "./components/InstagramGrid/InstagramGrid";
import DeliveryLinks from "./components/DeliveryLinks/DeliveryLinks";
function AppContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />

      {/* Scroll ao topo ao trocar rota */}
      <ScrollToTopOnRouteChange />

      {/* Botão flutuante de voltar ao topo */}
      <ScrollTop />

      <Routes>
        {/* ===================== HOME ===================== */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                {/* SEO Básico */}
                <title>The Brothers Burguer | Hambúrguer Artesanal em Betim</title>
                <meta
                  name="description"
                  content="The Brothers Burguer — Hambúrguer artesanal feito com blend especial, pão macio, ingredientes frescos e muito sabor. Peça online e descubra a melhor experiência em hamburgueria artesanal de Betim."
                />
                <meta
                  name="keywords"
                  content="hambúrguer artesanal, hamburgueria betim, the brothers burguer, smash burger, burger artesanal, comida artesanal, hamburguer delivery"
                />
                <link rel="canonical" href="https://thebrothersburguer.com" />

            
                {/* Schema.org — Restaurante */}
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Restaurant",
                      "name": "The Brothers Burguer",
                      "description": "Hambúrguer artesanal com blend exclusivo e ingredientes frescos em Betim.",
                      "servesCuisine": "Hambúrguer Artesanal",
                      "image": "https://thebrothersburguer.com/images/og-image.jpg",
                      "priceRange": "$$",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Betim",
                        "addressRegion": "MG",
                        "addressCountry": "BR"
                      },
                      "url": "https://thebrothersburguer.com",
                      "sameAs": [
                        "https://instagram.com/thebrothersburguer",
                        "https://facebook.com/thebrothersburguer"
                      ]
                    }
                  `}
                </script>
              </Helmet>

              <main className="pt-14 min-h-screen flex flex-col">
                <Hero />
      
                <MenuShowCase /> 
                <DeliveryLinks />
                <SingleUnit />
                <About />
                <InstagramGrid />

              </main>
            </>
          }
        />

        {/* ===================== OUTRAS PÁGINAS ===================== */}
        <Route path="/about" element={<About />} />
        <Route path="/Politicas" element={<PoliticaEPrivacidade />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>

        <Router>
          <AppContent />
        </Router>

    </HelmetProvider>
  );
}
