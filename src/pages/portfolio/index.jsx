import "./index.scss";

import { useTranslation } from "react-i18next";

import imgGraphic from "../../assets/img/projects/graphic.png";
import imgApiMovies from "../../assets/img/projects/api-movies.png";
import imgRestauranteDelicia from "../../assets/img/projects/restaurante-delicia.png"
import imgEcommerce from "../../assets/img/projects/e-commerce.png";
import imgLookClient from "../../assets/img/projects/look-client.png";
import imgCologneseTwo from "../../assets/img/projects/colognese-client.png";
import { useState } from "react";
import imgProjetoIntegrador from "../../assets/img/projects/projeto-integrador.png";

export default function Portfolio() {

  const { t } = useTranslation();

  const [filter, setFilter] = useState("*");

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <section id="portfolio" className="container-portfolio light-background">
      <div className="section-title portfolio-header">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t("portfolio")}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          {t("portfolioResume")}
        </p>
      </div>
      <div
        className="portfolio-filters"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          className={filter === "*" ? "active" : ""}
          onClick={() => handleFilterClick("*")}
        >
          {t("all")}
        </button>
        <button
          className={filter === ".front-end" ? "active" : ""}
          onClick={() => handleFilterClick(".front-end")}
        >
          FrontEnd
        </button>
        <button
          className={filter === ".back-end" ? "active" : ""}
          onClick={() => handleFilterClick(".back-end")}
        >
          BackEnd
        </button>
        <button
          className={filter === ".full-stack" ? "active" : ""}
          onClick={() => handleFilterClick(".full-stack")}
        >
          FullStack
        </button>
      </div>
      <div className="portfolio-items" data-aos="fade-up" data-aos-delay="100">
        {projects
          .filter(
            (project) =>
              filter === "*" || project.filterClass === filter.slice(1),
          )
          .map((project) => (
            <PortfolioItem
              key={project.title}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              filterClass={project.filterClass}
              linkProject={project.linkProject}
              linkGitHub={project.linkGitHub}
            />
          ))}
      </div>
    </section>
  );
}

const projects = [
  {
    imgSrc: imgGraphic,
    title: "Página de Avaliação",
    filterClass: "front-end",
    linkProject: "https://graphic-gray.vercel.app/",
    linkGitHub: "https://github.com/jonatasem/graphic",
  },
  {
    imgSrc: imgEcommerce,
    title: "E-Commerce",
    filterClass: "front-end",
    linkProject: "https://jonatasem.github.io/headphones/",
    linkGitHub: "https://github.com/jonatasem/headphones",
  },
  {
    imgSrc: imgLookClient,
    title: "Look Client",
    filterClass: "full-stack",
    linkProject: "https://client-look.vercel.app/",
    linkGitHub: "https://github.com/jonatasem/client-look",
  },
  {
    imgSrc: imgApiMovies,
    title: "API Look",
    filterClass: "back-end",
    linkProject: "https://api-look.onrender.com/api/movies",
    linkGitHub: "https://github.com/jonatasem/api-look",
  },
  {
    imgSrc: imgCologneseTwo,
    title: "Colognese 2.0",
    filterClass: "full-stack",
    linkProject: "https://client-colognese.vercel.app/",
    linkGitHub: "https://github.com/jonatasem/server-colognese",
  },
  {
    imgSrc: imgRestauranteDelicia,
    title: "Restaurante Delicia",
    filterClass: "full-stack",
    linkProject: "https://client-ecommerce-omega.vercel.app/",
    linkGitHub: "https://github.com/jonatasem/client-ecommerce",
  },
    {
    imgSrc: imgProjetoIntegrador,
    title: "Projeto Integrador",
    filterClass: "full-stack",
    linkProject: "https://client-automec-pi-2025.vercel.app/",
    linkGitHub: "https://github.com/jonatasem/dashboard-admin",
  }
];

function PortfolioItem({
  imgSrc,
  title,
  filterClass,
  linkProject,
  linkGitHub,
}) {
  return (
    <div className={`portfolio-item ${filterClass}`}>
      <div className="portfolio-content">
        <img src={imgSrc} alt={title} />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <a href={linkProject} title="Ver ao vivo" className="preview-link">
            🔍
          </a>
          <a href={linkGitHub} title="Ver o código" className="details-link">
            🔗
          </a>
        </div>
      </div>
    </div>
  );
}
