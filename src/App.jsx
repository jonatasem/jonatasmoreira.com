import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/App.scss";

import { useScrollMenu } from "./components/useScrollMenu";
import Mobile from "./components/mobile";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import Skills from "./pages/skills";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import ScrollToTop from "./components/scroll";

export default function App() {
  const [mobile, setMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useScrollMenu();

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
