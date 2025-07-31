import "./Navbar.css";
import "../index.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header-wrapper">
      <header className="container header-container">
        <nav>
          <figure className="logo">
            <img src="../../public/assets/book.png" alt="logo" />
            <span>LinguaCraft</span>
          </figure>
          <ul>
            <li>
              <Link className="active nav-links">Home</Link>
            </li>
            <li>
              <Link className="nav-links">Courses</Link>
            </li>
            <li>
              <Link className="nav-links">Dashboard</Link>
            </li>
            <li>
              <Link className="nav-links">Community</Link>
            </li>
            <li>
              <Link className="nav-links">About</Link>
            </li>
          </ul>
          <div className="register">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signUp">Sign up</button>
            <span>mode</span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
