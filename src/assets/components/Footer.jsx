import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP LINE */}
        <div className="footer-line"></div>

        {/* FOOTER MAIN */}
        <div className="footer-main">

          <div className="footer-brand">
            <span className="footer-logo">DEV-HIVE</span>

            <p>
              // SOFTWARE · DESIGN · TECHNOLOGY
            </p>
          </div>

          <div className="footer-status">
            <span></span>
            SYSTEM ONLINE
          </div>

          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            BACK TO TOP
            <strong>↑</strong>
          </button>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Santiago Giraldo Niño. ALL RIGHTS RESERVED.
          </p>

          <p>
            BUILT WITH <span>REACT</span> · <span>VITE</span> · <span>CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

