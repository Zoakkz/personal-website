import Cursor from "./components/Cursor";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import FadeIn from "./components/FadeIn";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main style={{ cursor: "none" }} className="relative">
      <Cursor />
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Skills />
        </FadeIn>
        <FadeIn delay={0.1}>
          <About />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Contact />
        </FadeIn>
      </div>
    </main>
  );
}
