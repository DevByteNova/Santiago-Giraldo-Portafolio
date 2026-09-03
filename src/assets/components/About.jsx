import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="section-header">
          <span className="section-number">02</span>
          <span className="section-line"></span>
          <span className="section-label">// ABOUT ME</span>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p className="about-tag">// WHO AM I?</p>

            <h2>
              Code is not just
              <span>what I do.</span>
              It's what I create.
            </h2>

            <p className="about-description">
              Soy un desarrollador apasionado por la tecnología y la creación
              de experiencias digitales. Me interesa transformar ideas en
              aplicaciones, sitios web y soluciones de software funcionales
              y visualmente atractivas.
            </p>

            <p className="about-description">
              Actualmente estoy construyendo mis habilidades en desarrollo
              web y software, explorando nuevas tecnologías y buscando
              constantemente nuevos proyectos con los que llevar mis ideas
              más lejos.
            </p>

            <div className="about-terminal">
              <span className="terminal-symbol">&gt;</span>
              <span className="terminal-text">
                Always learning. Always building.
              </span>
              <span className="terminal-cursor"></span>
            </div>
          </div>

          <div className="developer-card">

            <div className="card-top">
              <span>DEVELOPER_PROFILE</span>
              <span className="card-id">#002</span>
            </div>

            <div className="profile-icon">
              <span>&lt;/&gt;</span>
            </div>

            <h3>SANTIAGO</h3>

            <p className="profile-role">
              SOFTWARE DEVELOPER
            </p>

            <div className="profile-status">
              <span className="status-indicator"></span>
              SYSTEM ONLINE
            </div>

            <div className="profile-divider"></div>

            <div className="profile-data">

              <div className="data-row">
                <span>FOCUS</span>
                <strong>WEB / SOFTWARE</strong>
              </div>

              <div className="data-row">
                <span>MODE</span>
                <strong>BUILDING</strong>
              </div>

              <div className="data-row">
                <span>VERSION</span>
                <strong>2026.09</strong>
              </div>

            </div>

            <div className="card-decoration"></div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;