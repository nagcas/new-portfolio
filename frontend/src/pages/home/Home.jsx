import About from "../../components/about/About";
import Contacts from "../../components/contacts/Contacts";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navbar/NavBar";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

function Home() {
  return(
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;