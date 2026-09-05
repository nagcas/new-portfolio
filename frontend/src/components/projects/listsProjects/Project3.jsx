import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import EpicBooks from "../../../assets/project/epic-books-project.png";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

function Project3() {

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
          href="https://github.com/nagcas/PFM-W4D4-EPIC-BOOKS-TESTS--15.06.2024"
          target="_blank"
          rel="noopener noreferrer"
          className="link__pages"
        >
           <Image 
            src={EpicBooks} 
            alt="Strive Blog" 
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
              <span className="project__title">Epic Books</span>
            </p>
            <p className="text-white fs-5">
              {t("project3.text-1")}
              <span className="fw-bold"> React</span>
            </p>
            <p className="text__color">
              {t("project3.text-2")} <span className="fw-bold">"EPIC Books"</span> {t("project3.text-3")}
              {t("project3.text-4")}
            </p>

            {/* Tags for SafeQuake Alert */}
            <div className="tags">
              {/* Technology Tags */}
              <span className="tag">
                <i className="bi bi-bootstrap-fill"></i> Bootstrap 5
              </span>
              <span className="tag">
                <i className="bi bi-code-slash"></i> React.js
              </span>
              <span className="tag tag-vite">
                <i className="bi bi-code-slash"></i> Vite
              </span>
              <span className="tag tag-axios">
                <i className="bi bi-code-slash"></i> Axios
              </span>
            </div>
          </div>
          <p className="text-white mt-4">
          {t("project3.text-5")} {" "}
            <a
              href="https://github.com/nagcas/PFM-W4D4-EPIC-BOOKS-TESTS--15.06.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="link__pages"
            >
              Epic Books
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Project3;
