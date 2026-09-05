import "./Contacts.css";

import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Contacts() {

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

  // URL dell'API di backend
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formContact, setFormContact] = useState({
    name: "",
    last_name: "",
    email: "",
    content: "",
  });

  // Gestisce i cambiamenti nei campi di input del modulo form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormContact({
      ...formContact,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Funzione di validazione del modulo
  const validate = () => {
    const newErrors = {};
    if (!formContact.name.trim()) {
      newErrors.name = t("contacts.devi-inserire-il-tuo-nome");
    }
    if (!formContact.last_name.trim()) {
      newErrors.last_name = t("contacts.devi-inserire-il-tuo-cognome");
    }
    if (!formContact.email.trim()) {
      newErrors.email = t("contacts.devi-inserire-la-tua-email");
    }
    if (!formContact.content.trim()) {
      newErrors.content = t("contacts.devi-inserire-il-tuo-messaggio");
    }

    return newErrors;
  };

  // Gestisce l'invio dei dati del modulo
  const handleSaveSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del modulo

    const validationErrors = validate(); // Esegue la validazione del modulo
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Mostra gli errori di validazione
      return;
    };
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/v1/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formContact),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        setErrors({
          message: errorData.message || t("contacts.errore-nell'invio-dei-dati"),
        });
        return;
      };

      setMessage({ type: "success", text: t("contacts.messaggio-inviato") }); // Mostra un messaggio di successo

      // Reset del modulo dopo il successo
      setTimeout(() => {
        setFormContact({
          name: "",
          last_name: "",
          email: "",
          content: "",
        });
        setMessage(null); // Rimuove il messaggio di successo
      }, 1500);
    } catch (error) {
      console.error("contact:", error.message);
      setErrors({ email: t("contacts.errore-nell'invio-della-email") }); // Mostra un errore specifico per l'email
    } finally {
      setLoading(false); // Nasconde lo spinner di caricamento
    }
  };

  return (
    <Container id="contacts">
      <h2 className="d-flex justify-content-center align-items-center content__title__contacts">
        {t("contacts.contatti")}
      </h2>
      <Row className="d-flex justify-content-between align-items-center">
        <Col data-aos="fade-up" sm={12} md={12} lg={4}>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <i className="bi bi-envelope-at-fill icons__email"></i>
            <p className="mt-3 fs-4 text-white no-copy">
              {t("contacts.gianluca")}
            </p>
            <p className="fs-4 text-white no-copy">
            {t("contacts.cell")} +39 351 8517108
            </p>
            <p className="fs-4 text-white no-copy">
            {t("contacts.email")} <span className="fw-bold no-copy">studio.nagcas@outlook.it</span>
            </p>
          </div>
        </Col>
        <Col data-aos="fade-up" sm={12} md={12} lg={8}>
          <Form onSubmit={handleSaveSubmit} className="content__contacts" autoComplete="off">
            <Row className="form__contact">
              <Col md={6}>
                <FloatingLabel
                  controlId="contact-name"
                  label={
                    errors.name ? (
                      <span className="text-danger">{errors.name}</span>
                    ) : (
                      t("contacts.inserisci-il-tuo-nome")
                    )
                  }
                  className="mb-3"
                >
                  <Form.Control
                    className="form__input"
                    type="text"
                    name="name"
                    aria-label={t("contacts.inserisci-il-tuo-nome")}
                    placeholder={t("contacts.inserisci-il-tuo-nome")}
                    value={formContact.name}
                    onChange={handleInputChange}
                    isInvalid={!!errors.name}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="contact-lastname"
                  label={
                    errors.last_name ? (
                      <span className="text-danger">{errors.last_name}</span>
                    ) : (
                      t("contacts.inserisci-il-tuo-cognome")
                    )
                  }
                  className="mb-3"
                >
                  <Form.Control
                    className="form__input"
                    type="text"
                    name="last_name"
                    aria-label={t("contacts.inserisci-il-tuo-cognome")}
                    placeholder={t("contacts.inserisci-il-tuo-cognome")}
                    value={formContact.last_name}
                    onChange={handleInputChange}
                    isInvalid={!!errors.last_name}
                  />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <FloatingLabel
                  controlId="contact-email"
                  label={
                    errors.email ? (
                      <span className="text-danger">{errors.email}</span>
                    ) : (
                      t("contacts.inserisci-la-tua-email")
                    )
                  }
                  className="mb-3"
                >
                  <Form.Control
                    className="form__input"
                    type="email"
                    name="email"
                    aria-label={t("contacts.inserisci-la-tua-email")}
                    placeholder={t("contacts.inserisci-la-tua-email")}
                    value={formContact.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                  />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <FloatingLabel
                  controlId="contact-message"
                  label={
                    errors.content ? (
                      <span className="text-danger">{errors.content}</span>
                    ) : (
                      t("contacts.inserisci-il-tuo-messaggio")
                    )
                  }
                >
                  <Form.Control
                    className="mb-3 form__textarea"
                    as="textarea"
                    placeholder={t("contacts.inserisci-il-tuo-messaggio")}
                    aria-label={t("contacts.inserisci-il-tuo-messaggio")}
                    name="content"
                    value={formContact.content}
                    onChange={handleInputChange}
                    isInvalid={!!errors.message}
                  />
                </FloatingLabel>
              </Col>
              <Col md={12} className="text-end">
                <Button
                  type="submit"
                  variant="outline-light"
                  className="btn__send__form"
                  aria-label={t("contacts.inserisci-il-tuo-messaggio")}
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    t("contacts.invia-messaggio")
                  )}
                </Button>
                {message && (
                  <Alert
                    variant={message.type}
                    className="m-3 text-center"
                    aria-live="assertive"
                  >
                    {message.text}
                  </Alert>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
