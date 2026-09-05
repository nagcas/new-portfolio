import "./Page404.css";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Page404() {

  const { t } = useTranslation("global");

  return (
    <Container className="page__not__found">
      <div className="content">
        <h1>404</h1>
        <h4>{t("page404.text-1")}</h4>
        <p>{t("page404.text-2")}</p>
        <p>{t("page404.text-3")}</p>
        <Link to="/" className="home">
          {t("page404.link")}
        </Link>
      </div>
    </Container>
  );
}

export default Page404;
