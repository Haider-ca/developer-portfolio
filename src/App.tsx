import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="section bg-white">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <About />
            <Skills />
          </div>
        </div>

        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}