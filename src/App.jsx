import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useScrollMenu } from "./components/useScrollMenu/useSrollMenu"; // Importando o hook
import "./styles/App.scss";

// Imports Components
import Mobile from "./components/mobile/Mobile";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// Imports Pages
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import ScrollToTop from "./components/scroll/ScrollToTop";

export default function App() {
  const [mobile, setMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useScrollMenu(); // Usando o hook para gerenciar o menu ativo

  const toggleMobileMenu = () => {
    setMobile((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobile(false);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    closeMobileMenu();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section className="container-app">
        <article className={`app-header ${mobile ? "header-mobile" : ""}`}>
          <Header
            activeMenu={activeMenu}
            onMenuClick={handleMenuClick}
            mobClick={closeMobileMenu}
          />
          <Mobile mobClick={toggleMobileMenu} isOpen={mobile} />
        </article>
        <article className="app-center">
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Skills />
          <Footer />
        </article>
        <ScrollToTop />
      </section>
    </>
  );
}
