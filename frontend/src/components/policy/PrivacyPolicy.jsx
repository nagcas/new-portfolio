import "./PrivacyPolicy.css";

import { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function PrivacyPolicy() {

  const { t } = useTranslation("global");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Button
        variant="outline-light"
        onClick={handleShow}
        className="btn__privacy"
      >
        Privacy & Cookie Policy
      </Button>
      <Offcanvas
        data-aos="flip-up"
        show={show}
        onHide={handleClose}
        placement="modal-fullscreen"
        className="modal-fullscreen content__privacy"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1 className="title__privacy">Privacy & Cookie Policy</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <header>
            <p>{t("privacy.header")} 13/09/2024</p>
          </header>

          <section>
            <h2>{t("privacy.section-1")}</h2>
            <p>
            {t("privacy.section-2")}{" "}
              <span className="fw-bold">[https://portfolio-gianluca-phi.vercel.app/](https://portfolio-gianluca-phi.vercel.app/)</span>.
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-3")}</h2>
            <h3>{t("privacy.section-4")}</h3>
            <p>
              {t("privacy.section-5")}
            </p>
            <ul>
              <li>{t("privacy.nome")}</li>
              <li>{t("privacy.cognome")}</li>
              <li>{t("privacy.email")}</li>
              <li>{t("privacy.messaggio")}</li>
            </ul>

            <h3>{t("privacy.section-6")}</h3>
            <p>
            {t("privacy.section-7")}
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-8")}</h2>
            <p>
            {t("privacy.section-9")}
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-10")}</h2>
            <p>
            {t("privacy.section-11")}
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-12")}</h2>
            <p>
            {t("privacy.section-13")}
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-14")}</h2>
            <p>
            {t("privacy.section-15")}
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-16")}</h2>
            <p>
            {t("privacy.section-17")}
            </p>
          </section>

          <section>
            <h2>{t("privacy.section-18")}</h2>
            <p className="no-copy">
            {t("privacy.section-19")}{" "}
              <a href="mailto:studio.nagcas@outlook.it">studio.nagcas@outlook.it</a>.
            </p>
          </section>

          <hr />

          <section>
            <h2>Cookie Policy</h2>
            <p>
              {t("privacy.section-20")}
            </p>

            <h3>{t("privacy.section-21")}</h3>
            <ul>
              <li>
                <span className="fw-bold">{t("privacy.section-22")}</span> {t("privacy.section-23")}
              </li>
              <li>
                <span className="fw-bold">{t("privacy.section-24")}</span> {t("privacy.section-25")}
              </li>
              <li>
                <span className="fw-dolc">{t("privacy.section-26")}</span> {t("privacy.section-27")}
              </li>
            </ul>

            <h3>{t("privacy.section-28")}</h3>
            <p>
            {t("privacy.section-29")}
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PrivacyPolicy;
