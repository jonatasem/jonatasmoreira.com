import React from "react";
import { ReactTyped } from "react-typed";
import "./index.scss";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="container-home dark-background">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Jonatas Elieser Moreira
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          {t("home-title")}{" "}
          <ReactTyped
            strings={[t("frontend"), t("backend"), t("database")]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
      </div>
    </section>
  );
}