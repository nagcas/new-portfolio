import "./Footer.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import PrivacyPolicy from "../policy/PrivacyPolicy";
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation("global");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex justify-content-center align-items-top">
          <Col sm={12} md={6} lg={3} className="text-center">
            <Link to="hero" className="logo-link mt-4">
              <h5 className="no-copy">
                Gianluca
                {" "}<Image src={Logo} alt="Logo" className="logo" />{" "}
                Chiaravalloti
              </h5>
            </Link>
            <p>{t("footer.text-logo-1")} <span className="fw-bold">{t("footer.text-logo-2")}</span></p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-center">
            <Link to="contacts" className="contacts-link mt-4">
              <h5>{t("footer.contatti")}</h5>
            </Link>
            <p className="no-copy">{t("footer.email")} studio.nagcas@outlook.it</p>
            <p className="no-copy">{t("footer.telefono")} +39 351 8517108</p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-center">
            <Link to="about" className="about-link mt-4">
              <h5>{t("footer.chi-sono")}</h5>
            </Link>
            <p>{t("footer.chi-sono-sfida")}</p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-center mb-3">
            <h5>{t("footer.seguimi")}</h5>
            <div className="social-icons mt-4">
              <a
                href="https://github.com/nagcas"
                target="_blank"
                rel="noopener noreferrer"

              >
                <i className="bi bi-github icons__social"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gianluca-chiaravalloti-5694081a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin icons__social"></i>
              </a>
              <a
                href="https://discord.gg/JzfsTmWK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-discord icons__social"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 border__top">
          <Col className="text-center my-4">
            <p>{currentYear} {t("footer.portfolio")}</p>
            <p>by Dr. Gianluca Chiaravalloti</p>
          </Col>
          <Col className="text-center my-4">
            <PrivacyPolicy />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
