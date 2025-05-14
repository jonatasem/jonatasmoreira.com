import "./index.scss";
import { useTranslation } from "react-i18next";

export default function Resume() {
  
  const { t } = useTranslation();

  return (
    <section id="resume" className="container-resume section">
      <div className="container section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t("resume")}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          {t("resumeDescription")}
        </p>
      </div>

      <div className="container">
        <div>
          <div>
            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("training")}
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>{t("bachelor")}</h4>
              <h5>{t("bachelorData")}</h5>
              <p>
                <em>{t("bacharelorLocation")}</em>
              </p>
              <p>
                {t("bacharelorResume")}
              </p>
            </div>

            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>{t("technical")}</h4>
              <h5>{t("technicalData")}</h5>
              <p>
                <em>{t("technicalLocation")}</em>
              </p>
              <p>
                {t("technicalResume")}
              </p>
            </div>
          </div>

          <div className="experience-section">
            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("experience")}
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>{t("experienceOneTitle")}</h4>
              <h5>{t("experienceOneData")}</h5>
              <p>
                <em>{t("experienceOne")}</em>
              </p>
              <ul>
                <li>{t("experienceOneDescript")}</li>
                <li>{t("experienceOneDescriptTwo")}</li>
                <li>{t("experienceOneDescriptTree")}</li>
              </ul>
            </div>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>{t("experienceTwoTitle")}</h4>
              <h5>{t("experienceTwoData")}</h5>
              <p>
                <em>{t("experienceTwo")}</em>
              </p>
              <ul>
               <li>{t("experienceTwoDescript")}</li>
               <li>{t("experienceTwoDescriptTwo")}</li>
               <li>{t("experienceTwoDescriptTree")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
