import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/hero";
import About from "./assets/components/about";
import Technologies from "./assets/components/Technologies";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

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

        <Footer />
      </main>
    </>
  );
}

export default App;