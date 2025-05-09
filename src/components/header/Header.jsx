import "./Header.scss";

import imgAutor from "../../assets/img/my-profile-img.jpg";

//icons redes sociais
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//icons link
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

export default function Header({ activeMenu, onMenuClick, mobClick }) {
  return (
    <header id="header" className="container-header dark-background">
      <div className="profile-img">
        <img src={imgAutor} alt="imagem do autor" />
      </div>

      <h1 className="sitename">Jonatas Elieser Moreira</h1>

      <div className="social-links">
        <a href="https://github.com/jonatasem" className="github">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100079143820691"
          className="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/jonatasemoreira01/"
          className="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5518991937096?text=Ol%C3%A1%20Jonatas"
          className="whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a href="https://www.figma.com" className="figma">
          <FaFigma />
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="#home"
              className={activeMenu === "home" ? "active" : ""}
              onClick={() => onMenuClick("home")} // Passa o menu ativo
            >
              <FaHome className="icon" />
              Início
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeMenu === "about" ? "active" : ""}
              onClick={() => onMenuClick("about")}
            >
              <FaUser className="icon" />
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeMenu === "resume" ? "active" : ""}
              onClick={() => onMenuClick("resume")}
            >
              <FaFileAlt className="icon" />
              Resumo
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeMenu === "portfolio" ? "active" : ""}
              onClick={() => onMenuClick("portfolio")}
            >
              <FaImages className="icon" />
              Portfólio
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeMenu === "skills" ? "active" : ""}
              onClick={() => onMenuClick("skills")}
            >
              <FaBarsProgress className="icon" />
              Habilidades
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
