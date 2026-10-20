
import churchLogo from "../assets/churchlogo.jpeg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Footer About */}
        <div className="footer-about">

          <div className="footer-logo">

            <img
              src={churchLogo}
              alt="Jesus Family Church Australia Logo"
              className="footer-church-logo"
            />

            <div>

              <strong>
                JESUS FAMILY CHURCH
              </strong>

              <small>
                AUSTRALIA
              </small>

            </div>

          </div>

          <p>
            A multicultural Christian church family in Melbourne,
            welcoming people from different cultures, languages
            and backgrounds.
          </p>
{/* Social Media */}
<div className="footer-social">
  <h3>Connect With Us</h3>

  <div className="footer-social-icons">
    <a
      href="https://www.facebook.com/jesusfamilychurchaustralia"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      title="Facebook"
    >
      f
    </a>

    <a
      href="https://www.instagram.com/jesusfamilychurchaustralia/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      title="Instagram"
    >
      ◎
    </a>

    <a
      href="https://www.youtube.com/@jesusfamilychurchaustralia9865"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      title="YouTube"
    >
      ▶
    </a>
  </div>

  <p>Follow our church for worship, messages and updates.</p>
</div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/ministries">Ministries</a>
          <a href="/whats-happening">What's Happening</a>
          <a href="/sermons">Sermons</a>
          <a href="/give">Give</a>
          <a href="/prayer-request">Prayer Request</a>
          <a href="/get-in-touch">Get In Touch</a>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 Spring Street Hall</p>
          <p>1 Spring St, Thomastown</p>
          <p>VIC 3074, Australia</p>

          <p className="footer-space">
            📞 +61 432 248 276
          </p>

          <p>
            📧 jesusfamilychurchaustralia@gmail.com
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Jesus Family Church Australia. All rights reserved.
        </p>

        <div>

          <a href="#home">
            Privacy Policy
          </a>

          <a href="#home">
            Terms
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
