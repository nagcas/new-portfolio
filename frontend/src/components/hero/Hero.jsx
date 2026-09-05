import "./Hero.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import iconReact from "../../assets/icons/icons8-react-native-240.png";
import iconHtml from "../../assets/icons/icons8-html-240.png";
import iconCSS from "../../assets/icons/icons8-css-240.png";
import iconJavascript from "../../assets/icons/icons8-javascript-240.png";
import iconPython from "../../assets/icons/icons8-python-240.png";
import { useTranslation } from "react-i18next";


function Hero() {

  const { t } = useTranslation("global");

  return (
    <Container id="hero" fluid className="m-0">
      <div className="content__hero">
        <Row className="d-flex align-content-center">
          <Col className="content__title__hero">
            <h1 className="title__hero">{t("hero.title-hero")}</h1>  
            <h3 className="subtitle__hero">{t("hero.subtitle-hero")}</h3>
          </Col>
        </Row>
      </div>
     
    </Container>
  );
};

export default Hero;
