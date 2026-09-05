import "./NavBar.css";
import { useState } from "react";
import {
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-scroll";
import Italia from "../../assets/bandiere/icons8-italia-100.png";
import GranBretagna from "../../assets/bandiere/icons8-gran-bretagna-100.png";
import Spagna from "../../assets/bandiere/icons8-spagna-2-100.png";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo/logo.png";

function NavBar() {

  const { t, i18n } = useTranslation("global");

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <Navbar
      expand="lg"
      className="navbar-dark mb-4 fixed-top p-4 menu__navbar shadow"
    >
      <Container fluid={true}>
        {/* Logo Portfolio */}
        <Navbar.Brand>
          Gianluca <Image src={Logo} alt="Logo di Gianluca Chiaravalloti" className="logo" />{" "}
          Chiaravalloti
        </Navbar.Brand>

        {/* Toggle Btn */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          className="shadow-none border-0"
          onClick={handleShow}
        />

        {/* Sidebar */}
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
          className="sidebar"
        >
          {/* Sidebar header */}
          <Offcanvas.Header
            className="text-white border-bottom close__white"
            closeButton
          >
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Gianluca <Image src={Logo} alt="Logo di Gianluca Chiaravalloti" className="logo" />{" "}
              Chiaravalloti
            </Offcanvas.Title>
          </Offcanvas.Header>

          {/* Sidebar body */}
          <Offcanvas.Body className="d-flex flex-column flex-lg-row p-4 p-lg-0">
            <Nav className="d-flex justify-content-center align-items-center flex-grow-1 pe-3">
              <Link
                to="hero"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("hero")}
                className={
                  activeLink === "hero"
                    ? "mx-4 menu__navbar__link nav__menu active"
                    : "mx-4 menu__navbar__link nav__menu"
                }
                onClick={handleClose}
              >
                {t("navbar.home")}
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("projects")}
                className={
                  activeLink === "projects"
                    ? "mx-4 menu__navbar__link nav__menu active"
                    : "mx-4 menu__navbar__link nav__menu"
                }
                onClick={handleClose}
              >
                {t("navbar.progetti")}
              </Link>

              <Link
                to="skills"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("skills")}
                className={
                  activeLink === "skills"
                    ? "mx-4 menu__navbar__link nav__menu active"
                    : "mx-4 menu__navbar__link nav__menu"
                }
                onClick={handleClose}
              >
                {t("navbar.skills")}
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("about")}
                className={
                  activeLink === "about"
                    ? "mx-4 menu__navbar__link nav__menu active"
                    : "mx-4 menu__navbar__link nav__menu"
                }
                onClick={handleClose}
              >
                {t("navbar.chi-sono")}
              </Link>

              <Link
                to="contacts"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("contacts")}
                className={
                  activeLink === "contacts"
                    ? "mx-4 menu__navbar__link nav__menu active"
                    : "mx-4 menu__navbar__link nav__menu"
                }
                onClick={handleClose}
              >
                {t("navbar.contatti")}
              </Link>
              {/* Language and Social Icons */}
              <div className="me-lg-4 mt-lg-0">
                {/* Language Dropdown */}
                <Dropdown className="d-block mx-3">
                  <Dropdown.Toggle className="bg-transparent border-0 custom-dropdown-toggle" variant="light">
                    <span className="text-white">
                      {i18n.language === "it" && <Image className="image__bandiera" src={Italia} alt="Italia" />}
                      {i18n.language === "en" && <Image className="image__bandiera" src={GranBretagna} alt="Gran Bretagna" />}
                      {i18n.language === "es" && <Image className="image__bandiera" src={Spagna} alt="Spagna" />}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mx-2 drop__menu">
                    <Dropdown.Item onClick={() => i18n.changeLanguage("it")}>
                      <Image className="image__bandiera" src={Italia} alt="Italia" /> {t("navbar.italiano")}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>
                      <Image className="image__bandiera" src={GranBretagna} alt="Gran Bretagna" /> {t("navbar.inglese")}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => i18n.changeLanguage("es")}>
                      <Image className="image__bandiera" src={Spagna} alt="Spagna" /> {t("navbar.spagnolo")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav>
            <div className="d-flex justify-content-center align-items-center">
              <a
                href="https://github.com/nagcas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github icons__social me-4"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gianluca-chiaravalloti-5694081a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin icons__social me-4"></i>
              </a>
              <a
                href="https://discord.gg/JzfsTmWK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-discord icons__social"></i>
              </a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;


