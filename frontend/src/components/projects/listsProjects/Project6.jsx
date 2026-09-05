import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import terraquake from "../../../assets/project/terraquake-api.jpg";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

function Project6() {

  const { t  } = useTranslation('global');

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
    <Container className="content__lists__projects">
      <Row className="content__projects">
        <Col 
          data-aos="zoom-in-left" 
          sm={12}
          md={12}
          lg={6}
        >
        <a
          href="https://terraquakeapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link__pages"
        >
           <Image 
            src={terraquake}
            alt="TerraQuake API"
            className="projects"
            loading="lazy"
          />
        </a>
        </Col>
        <Col 
          data-aos="zoom-in-right" 
          sm={12}
          md={12}
          lg={6}
        >
          <div>
            <p className="text-white fs-5">
              <span className="project__title">TerraQuake API</span>
            </p>
            <p className="text-white fs-5">
              {t("project6.text-1")}
              <span className="fw-bold"> HTML5/CSS3 React</span>
            </p>
            <p className="text__color">
              {t("project6.text-2")} <span className="fw-bold">"TerraQuake API"</span> {t("project6.text-3")}
              {t("project6.text-4")}
            </p>

            {/* Tags for TerraQuake API */}
            <div className="tags">
               {/* Technology Tags */}
                <span className="tag">
                  <i className="bi bi-filetype-html"></i> HTML5
                </span>
                <span className="tag">
                  <i className="bi bi-filetype-css"></i> CSS3
                </span>
                <span className="tag">
                  <i className="bi bi-filetype-css"></i> Tailwind CSS 4.0
                </span>
                <span className="tag">
                  <i className="bi bi-code-slash"></i> React.js
                </span>
                <span className="tag">
                  <i className="bi bi-node-plus-fill"></i> Node.js
                </span>
                <span className="tag">
                  <i className="bi bi-mongo"></i> MongoDB
                </span>
            </div>
          </div>
          <p className="text-white mt-4">
          {t("project6.text-5")} {" "}
            <a
              href="https://terraquakeapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link__pages"
            >
              TerraQuake API
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Project6;
