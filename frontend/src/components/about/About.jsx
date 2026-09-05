import "./About.css";

import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Gianluca from "../../assets/profile/gianluca.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  const { t } = useTranslation("global");

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const isScreenLarge = window.innerWidth >= 768;
      if (isScreenLarge !== isLargeScreen) {
        setIsLargeScreen(isScreenLarge);
      }
    };

    // Aggiungi l'evento di resize
    window.addEventListener("resize", handleResize);

    // Cleanup: rimuovi il listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  useEffect(() => {
    if (isLargeScreen) {
      AOS.init({ duration: 1000 });
    } else {
      AOS.refreshHard(); // Pulisce completamente AOS
      AOS.init({ disable: true }); // Disabilita AOS su dispositivi piccoli
    }
  }, [isLargeScreen]);
  
  return (
    <Container id="about" className="content__about no-copy">
      <h2 className="d-flex justify-content-center align-items-center content__title__about">
        {t("about.chi-sono")}
      </h2>
      <Row className="d-flex justify-content-between align-items-center">
        <Col data-aos="zoom-out-left" sm={12} md={12} lg={8}>
          <h4>
            {t("about.text-1")}
          </h4>

          <p className="about__text">
          {t("about.text-2")}
          </p>

          <p className="about__text">
            {t("about.text-3")} <span className="fw-bold">{t("about.text-4")}</span>,{" "} 
            {t("about.text-5")}
            <span className="fw-bold">{t("about.text-6")}</span>,{" "}{t("about.text-7")}
             <span className="fw-bold">{t("about.text-8")}</span>,{" "} 
            {t("about.text-9")}
          </p>

          <p className="about__text">
            {t("about.text-10")}
          </p>

          <p className="about__text float-end">
            {t("about.text-11")}
          </p>
        </Col>
        <Col
          data-aos="zoom-out-right"
          sm={12}
          md={12}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center content__foto__profilo"
        >
          <Image
            src={Gianluca}
            alt="Foto Gianluca Chiaravalloti"
            className="foto__profilo"
            loading="lazy"
          />
          <div className="download-cv">
            <a href="/cv/CV_Gianluca_Chiaravalloti.pdf" download>
              <Button
                variant="outline-light"
              >
                <i className="bi bi-download"></i> Download CV
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
