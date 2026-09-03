import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Technologies from "./assets/components/Technologies";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Technologies />

        <Projects />

        <Contact />

      </main>
    </>
  );
}

export default App;