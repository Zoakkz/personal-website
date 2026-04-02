import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
