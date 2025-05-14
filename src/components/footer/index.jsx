import "./index.scss";

import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <footer id="footer" class="container-footer light-background">
      <div class="container">
        <div class="copyright ">
          <p>
            © <span>Copyright</span> <strong>JEM</strong>{" "}
            <span>{t("reserved")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
