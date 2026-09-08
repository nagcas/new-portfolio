import About from "../../components/about/About";
import Contacts from "../../components/contacts/Contacts";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navbar/NavBar";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import BackToTop from "../../components/backToTop/BackToTop";
import ChatAssistant from "../../components/chatAssistant/ChatAssistant";

function Home() {
  return(
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <BackToTop />
      <ChatAssistant />
      <Footer />
    </>
  );
};

export default Home;