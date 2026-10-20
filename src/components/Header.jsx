
import { useState } from "react";
import { Menu, X } from "lucide-react";
import churchLogo from "../assets/churchlogo.jpeg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        {/* LOGO + CHURCH NAME */}
        <a href="/" className="header-brand" onClick={closeMenu}>

          <img
            src={churchLogo}
            alt="Jesus Family Church Australia"
          />

          <div className="header-church-name">
            <span>JESUS FAMILY CHURCH</span>
            <strong>AUSTRALIA</strong>
          </div>

        </a>

        {/* MENU */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a href="/" onClick={closeMenu}>Home</a>

          <a href="/about" onClick={closeMenu}>About Us</a>

          <a href="/christian-beliefs" onClick={closeMenu}>
            Our Beliefs
          </a>

          <a href="/ministries" onClick={closeMenu}>
            Ministries
          </a>

          <a href="/whats-happening" onClick={closeMenu}>
            What's Happening
          </a>

          <a href="/sermons" onClick={closeMenu}>
            Sermons
          </a>

          <a href="/gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="/give" onClick={closeMenu}>
            Give
          </a>

          <a href="/prayer-request" onClick={closeMenu}>
            Prayer Request
          </a>

          <a href="/get-in-touch" onClick={closeMenu}>
             Get In Touch
          </a>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </header>
  );
}

export default Header;
