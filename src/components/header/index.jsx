import "./index.scss";
import imgAutor from "../../assets/img/my-profile-img.jpg";
import LanguageSwitcher from '../languageSwitcher';
import { useTranslation } from "react-i18next";

// Importando ícones
import { 
  FaFacebook,
  FaInstagram,
  FaFigma,
  FaGithub,
  FaWhatsapp,
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages
} from "react-icons/fa";

import {
    FaBarsProgress,
    FaGlobe 
} from "react-icons/fa6"

import { useState } from "react";

export default function Header({ activeMenu, onMenuClick, mobClick }) {

  const [menuInternacional, setMenuInternacional] = useState(false);

  // Função para alternar o menu de idiomas
  const toggleLanguageMenu = () => {
    setMenuInternacional(prev => !prev); // Alterna o estado do menu
  };

  const { t } = useTranslation();

  return (
    <header id="header" className="container-header dark-background">
      <div className="language-i18n">
        <div onClick={toggleLanguageMenu} className="language-icon">
          <FaGlobe className="icon" />
        </div>
        {menuInternacional && ( 
          <div className="language-menu">
            <LanguageSwitcher  mobClickSon={mobClick} menuPrev={toggleLanguageMenu}/>
          </div>
        )}
      </div>

      <section className="header-center">
        <div className="profile-img">
          <img src={imgAutor} alt="imagem do autor" />
        </div>

        <h1 className="sitename">Jonatas Elieser Moreira</h1>

        <div className="social-links">
          <a href="https://github.com/jonatasem" className="github">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100079143820691" className="facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/jonatas.e.moreira/" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5518991937096?text=Ol%C3%A1%20Jonatas" className="whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://www.figma.com/@jonatas11" className="figma">
            <FaFigma />
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#home"
                className={activeMenu === "home" ? "active" : ""}
                onClick={() => onMenuClick("home")}
              >
                <FaHome className="icon" />
                {t("home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeMenu === "about" ? "active" : ""}
                onClick={() => onMenuClick("about")}
              >
                <FaUser className="icon" />
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeMenu === "resume" ? "active" : ""}
                onClick={() => onMenuClick("resume")}
              >
                <FaFileAlt className="icon" />
                {t("resume")}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeMenu === "portfolio" ? "active" : ""}
                onClick={() => onMenuClick("portfolio")}
              >
                <FaImages className="icon" />
                {t("portfolio")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeMenu === "skills" ? "active" : ""}
                onClick={() => onMenuClick("skills")}
              >
                <FaBarsProgress className="icon" />
                {t("skills")}
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}