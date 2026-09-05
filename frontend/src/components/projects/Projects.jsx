import "./Projects.css";

import { Container } from "react-bootstrap";
import Project1 from "./listsProjects/Project1";
import Project2 from "./listsProjects/Project2";
import Project3 from "./listsProjects/Project3";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import Project4 from "./listsProjects/Projects4";
import Project5 from "./listsProjects/Projects5";
import Project6 from "./listsProjects/Project6";

function Projects() {

  const { t } = useTranslation("global");

  return (
    <Container id="projects">
      <h2 className="content__title__projects">{t("projects.i-miei-progetti")}</h2>
      <Project6 />
      <Project5 />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
    </Container>
  );
}

export default Projects;
