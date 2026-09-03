import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid"></div>

      <div className="hero-content">

        <div className="hero-status">
          <span className="hero-status-dot"></span>
          SYSTEM ONLINE
        </div>

        <p className="hero-label">
          // SOFTWARE DEVELOPER
        </p>

        <h1 className="hero-title">
          BUILD
          <span>THE FUTURE.</span>
        </h1>

        <p className="hero-description">
          Desarrollo experiencias digitales, aplicaciones y soluciones
          de software combinando código, creatividad y tecnología.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            EXPLORE PROJECTS
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-button secondary">
            CONTACT ME
          </a>
        </div>

      </div>

      <div className="hero-hud hud-top-right">
        <span>STATUS</span>
        <strong>ONLINE</strong>
      </div>

      <div className="hero-hud hud-bottom-left">
        <span>BUILD</span>
        <strong>2026.09</strong>
      </div>

      <div className="hero-scroll">
        <span></span>
        SCROLL TO EXPLORE
      </div>

      <div className="hero-decoration decoration-one"></div>
      <div className="hero-decoration decoration-two"></div>

    </section>
  );
}

export default Hero;