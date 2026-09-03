import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="section-header">
          <span className="section-number">05</span>
          <span className="section-line"></span>
          <span className="section-label">// CONTACT</span>
        </div>

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

        <div className="contact-content">

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

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">NAME</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              <span>
                {status === "sending"
                  ? "TRANSMITTING..."
                  : status === "success"
                  ? "TRANSMISSION SENT ✓"
                  : status === "error"
                  ? "RETRY TRANSMISSION"
                  : "SEND TRANSMISSION"}
              </span>

              <strong>↗</strong>
            </button>

            {status === "success" && (
              <p className="contact-feedback success">
                // TRANSMISSION_SUCCESSFUL
              </p>
            )}

            {status === "error" && (
              <p className="contact-feedback error">
                // TRANSMISSION_FAILED — TRY AGAIN
              </p>
            )}

          </form>

        </div>

        <div className="contact-corner"></div>

      </div>
    </section>
  );
}

export default Contact;