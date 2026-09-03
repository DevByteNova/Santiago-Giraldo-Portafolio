import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-number">05</span>
          <span className="section-line"></span>
          <span className="section-label">// CONTACT</span>
        </div>

        {/* INTRO */}
        <div className="contact-intro">
          <p className="contact-tag">// OPEN_CHANNEL</p>

          <h2>
            LET'S BUILD
            <span>SOMETHING.</span>
          </h2>

          <p className="contact-description">
            ¿Tienes una idea, un proyecto o simplemente quieres hablar
            sobre tecnología? Estoy abierto a nuevas oportunidades,
            colaboraciones y proyectos interesantes.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="contact-content">

          {/* CONTACT INFO */}
          <div className="contact-info">

            <div className="contact-status">
              <span></span>
              SYSTEM_STATUS // ONLINE
            </div>

            <div className="contact-links">

              <a href="mailto:bytenovax@gmail.com">
                <span className="contact-label">// EMAIL</span>
                <span className="contact-value">
                  bytenovax@gmail.com
                </span>
                <strong>↗</strong>
              </a>

              <a
                href="https://github.com/DevByteNova"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-label">// GITHUB</span>
                <span className="contact-value">
                  github.com/DevByteNova
                </span>
                <strong>↗</strong>
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="YOUR NAME"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="bytenovax@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              <span>SEND TRANSMISSION</span>
              <strong>↗</strong>
            </button>

          </form>

        </div>

        {/* CORNER DECORATION */}
        <div className="contact-corner"></div>

      </div>
    </section>
  );
}

export default Contact;
