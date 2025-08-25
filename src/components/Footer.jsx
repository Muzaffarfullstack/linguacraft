import "./Footer.css";
import "../index.css";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="container footer-section">
        <div className="footer-1">
          <div className="footer-header">
            <img src="/assets/open-book.png" alt="logo" />
            <h2>LinguaCraft</h2>
          </div>
          <p>
            Empowering learners worldwide to master English with <br />
            confidence and community support.
          </p>
          <div className="social-media">
            <img src="/assets/facebook.png" alt="" />
            <img src="/assets/twitter.png" alt="" />
            <a
              href="https://www.instagram.com/linguacraft_official"
              target="_blank"
            >
              <img src="/assets/instagram.png" alt="" />
            </a>
            <img src="/assets/youtube.png" alt="" />
          </div>
        </div>

        <div className="footer-1">
          <h2>Resources</h2>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/contact">Help Center</Link>
            </li>
          </ul>
        </div>

        <div className="footer-1">
          <h2>Contact</h2>
          <div className="contact-card">
            <img src="/assets/mail.png" alt="" />
            <p>help.linguacraft@gmail.com</p>
          </div>

          <div className="contact-card">
            <img src="/assets/call.png" alt="" />
            <p>+371 (2) 781-97-22</p>
          </div>

          <div className="contact-card">
            <img src="/assets/globe-2.png" alt="" />
            <p>Available 24/7</p>
          </div>
        </div>
      </div>
      <p className="footer-end">
        © {year} LinguaCraft. All rights reserved. | Privacy Policy | Terms of
        Service
      </p>
    </div>
  );
}

export default Footer;
