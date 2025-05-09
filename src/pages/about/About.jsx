import "./About.scss";

import imgAutor from "../../assets/img/my-profile.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="container-about section">
      <article className="section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Sobre Mim
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
        Desenvolvedor Fullstack com experiência em criação de sistemas responsivos e escaláveis, buscando novas oportunidades para aplicar habilidades em desenvolvimento front-end e back-end.
        </p>
      </article>
      <article className="profile-about">
        <div className="profile-autor">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src={imgAutor}
            alt="imagem do autor"
          />
        </div>
        <div className="content">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Jonatas Elieser Moreira
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Desenvolvedor FullStack / DevOps
          </p>

          {/*Section Contact Info*/}
          <div className="about-info">
            <ul data-aos="fade-up" data-aos-delay="100">
              <li>
                <FaAngleRight />
                <strong>Email:</strong>
                <span>jonatas.em25@gmail.com</span>
              </li>
              <li>
                <FaAngleRight />
                <strong>Freelance:</strong> <span>Disponível</span>
              </li>
            </ul>
          </div>

          {/*Section Languages*/}
          <div
            className="container-languages"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>Idiomas</h2>
            <ul>
              <li>
                <p>Português - Nativo</p>
              </li>
              <li>
                <p>Inglês - B1</p>
              </li>
              <li>
                <p>Espanhol - A2</p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
