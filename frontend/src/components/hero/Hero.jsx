import './Hero.css';

import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Gianluca from '../../assets/profile/gianluca.png';

function Hero() {
  const { t } = useTranslation('global');

  return (
    <section id="hero" className="hero">
      <Container>
        <Row className="align-items-center min-vh-100 py-5">

          {/* Testo */}
          <Col
            xs={12}
            lg={7}
            className="hero__content text-center text-lg-start"
          >
            <span className="hero__eyebrow">
              {t('hero.eyebrow')}
            </span>

            <h1 className="hero__title">
              {t('hero.title-hero')}
            </h1>

            <p className="hero__subtitle">
              {t('hero.subtitle-hero')}
            </p>

            <p className="hero__description">
              {t('hero.description-hero')}
            </p>

            <div className="hero__actions d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
              <a
                href="#projects"
                className="hero__button_1"
              >
                {t('hero.projects-button')}
              </a>

              <a
                href="#contacts"
                className="hero__button_2"
              >
                {t('hero.contact-button')}
              </a>
            </div>
          </Col>

          {/* Foto */}
          <Col
            xs={12}
            lg={5}
            className="hero__image-wrapper d-flex justify-content-center"
          >
            <div className="hero__image-container">
              <div className="hero__image-glow" />

              <Image
                src={Gianluca}
                alt="Gianluca Chiaravalloti"
                className="image__profile__hero"
                loading="eager"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;
