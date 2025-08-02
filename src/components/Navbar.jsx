import { Link } from "react-router-dom";
import "../index.css";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container header-container">
        <div className="logo-section">
          <img src="/assets/open-book.png" alt="" className="logo-image" />
          <span>LinguaCraft</span>
          <div className="explore-section">
            <button className="explore-btn">Explore</button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-link">Home</Link>
              </li>
              <li>
                <Link className="dropdown-link">Courses</Link>
              </li>
              <li>
                <Link className="dropdown-link">Dashboard</Link>
              </li>
              <li>
                <Link className="dropdown-link">Community</Link>
              </li>
              <li>
                <Link className="dropdown-link">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="register-section">
          <button className="login">Login</button>
          <button className="signUp">Sign Up</button>

          <div className="menu-section">
            <img src="/assets/menu-bar.png" alt="" className="menu-bar" />
            <img src="/assets/delete2.png" alt="" className="close-btn" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
