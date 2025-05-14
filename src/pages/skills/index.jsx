import "./index.scss";

import { useTranslation } from "react-i18next";

export default function Skills() {

  const { t } = useTranslation();


  return (
    <section id="skills" className="container-skills light-background">
      <article className="container section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t("skills")}
        </h2>
      </article>

      <article className="skills-center">
        <div className="front-end" data-aos="fade-up">
          <h3 data-aos="fade-up">F</h3>
          <h2 data-aos="fade-up">Frontend</h2>
          <ul>
            <li data-aos="fade-up">HTML</li>
            <li data-aos="fade-up">CSS</li>
            <li data-aos="fade-up">JavaScript</li>
            <li data-aos="fade-up">TypeScript</li>
            <li data-aos="fade-up">Bootstrap</li>
            <li data-aos="fade-up">WordPress</li>
          </ul>
        </div>
        <div className="back-end" data-aos="fade-up">
          <h3 data-aos="fade-up">B</h3>
          <h2 data-aos="fade-up">Backend</h2>
          <ul>
            <li data-aos="fade-up">Node.js</li>
            <li data-aos="fade-up">Next.js</li>
            <li data-aos="fade-up">Rest Api</li>
            <li data-aos="fade-up">PHP</li>
          </ul>
        </div>
        <div className="data-bases">
          <h3 data-aos="fade-up">D</h3>
          <h2 data-aos="fade-up">{t("database")}</h2>
          <ul>
            <li data-aos="fade-up">SQLServer</li>
            <li data-aos="fade-up">PostgreSQL</li>
            <li data-aos="fade-up">Firebase</li>
            <li data-aos="fade-up">MySQL</li>
          </ul>
        </div>
        <div className="tolls-ops">
          <h3 data-aos="fade-up">T</h3>
          <h2 data-aos="fade-up">{t("tools")}</h2>
          <ul>
            <li data-aos="fade-up">Git</li>
            <li data-aos="fade-up">Docker</li>
            <li data-aos="fade-up">CI/CD</li>
            <li data-aos="fade-up">WebPack</li>
            <li data-aos="fade-up">Linux</li>
            <li data-aos="fade-up">Windows</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
