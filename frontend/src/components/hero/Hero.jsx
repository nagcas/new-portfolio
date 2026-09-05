import "./Hero.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import imageProfile from "../../assets/images/david-clode-MNEGikPGkAM-unsplash.png";
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
          
            <div className="icons__group d-flex justify-content-center">
              <div className="icon__item">
                <Image src={iconReact} alt="React" className="icons" />
                <h3>React</h3>
              </div>

              <div className="icon__item">
                <Image src={iconHtml} alt="HTML5" className="icons" />
                <h3>HTML5</h3>
              </div>

              <div className="icon__item">
                <Image src={iconCSS} alt="CSS3" className="icons" />
                <h3>CSS3</h3>
              </div>

              <div className="icon__item">
                <Image src={iconJavascript} alt="JavaScript" className="icons" />
                <h3>JavaScript</h3>
              </div>

              <div className="icon__item">
                <Image src={iconPython} alt="Python" className="icons" />
                <h3>Python</h3>
              </div>
            </div>
          </Col>
         
          {/* <Col>
            <Image 
              src={imageProfile} 
              alt="Image Profile" 
              className="image__profile__hero"
            />
          </Col> */}
        </Row>
      </div>
     
    </Container>
  );
};

export default Hero;
