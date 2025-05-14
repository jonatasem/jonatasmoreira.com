import "./index.scss";

import imgAutor from "../../assets/img/my-profile.jpg";
import { FaAngleRight } from "react-icons/fa";

import { useTranslation } from "react-i18next";

export default function About() {

  const { t } = useTranslation();

  return (
    <section id="about" className="container-about section">
      <article className="section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t("about")}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          {t("resumeAbout")}
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
            {t("functionAbout")}
          </p>

          {/*Section Contact Info*/}
          <div className="about-info">
            <ul data-aos="fade-up" data-aos-delay="100">
              <li>
                <FaAngleRight />
                <strong>{t("email")}:</strong>
                <span>jonatas.em25@gmail.com</span>
              </li>
              <li>
                <FaAngleRight />
                <strong>{t("freelance")}:</strong> <span>{t("available")}</span>
              </li>
            </ul>
          </div>

          {/*Section Languages*/}
          <div
            className="container-languages"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>{t("language")}</h2>
            <ul>
              <li>
                <p>{t("portuguese")}</p>
              </li>
              <li>
                <p>{t("english")}</p>
              </li>
              <li>
                <p>{t("spanish")}</p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
