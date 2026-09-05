import "./Skills.css";

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {

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

  const skills = [
    {
      name: "HTML5, CSS3, JavaScript (ES6+)",
      icon: "bi-code-slash"
    },
    {
      name: "React.js",
      icon: "bi-layers"
    },
    {
      name: "Node.js, Express",
      icon: "bi-node-plus"
    },
    {
      name: "MongoDB, Firebase",
      icon: "bi-database"
    },
    {
      name: "Git, GitHub, Version Control",
      icon: "bi-git"
    },
    {
      name: "Socket.io, WebSockets",
      icon: "bi-broadcast"
    },
    {
      name: "Chart.js, Leaflet (Data Visualization)",
      icon: "bi-graph-up"
    },
    {
      name: "JWT, Bcrypt (Authentication & Security)",
      icon: "bi-shield-lock"
    },
    {
      name: "Bootstrap 5",
      icon: "bi-bootstrap"
    },
    {
      name: "React-Hot-Toast",
      icon: "bi-chat-dots"
    },
    {
      name: "Python",
      icon: "bi-code-slash"
    },
    {
      name: "Flask/Django",
      icon: "bi-house"
    }
  ];

  return (
    <Container id="skills" className="content__skills">
      <h2 className="d-flex justify-content-center align-items-center content__title__skills">
        {t("skills.skills")}
      </h2>
      <Row className="d-flex justify-content-center align-items-center gap-4">
        {skills.map((skill, index) => (
          <Col
            md={4}
            className="skills"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <i className={`bi ${skill.icon} skill-icon`}></i> {/* Icona Bootstrap */}
            <p>{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;

