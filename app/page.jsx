import Image from "next/image";
import Main from "@components/Main";
import Highlight from "@components/Highlight";
import ProjectList from "@components/ProjectList";
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="app max-xl:px-4">
      <Main />
      <Highlight />
      <ProjectList />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
