import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-symbol">◈</span>
          <span className="logo-text">DEV<span>//</span>CORE</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            <span>01</span> Home
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>02</span> About
          </a>

          <a href="#technologies" onClick={closeMenu}>
            <span>03</span> Stack
          </a>

          <a href="#projects" onClick={closeMenu}>
            <span>04</span> Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>05</span> Contact
          </a>
        </nav>

        <div className="navbar-status">
          <span className="status-dot"></span>
          <span>ONLINE</span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;