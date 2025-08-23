import { Link } from "react-router-dom";
import "../index.css";
import "./Navbar.css";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(nice);

  const openDrawer = () => {
    setIsOpen(true);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="container header-container">
          <div className="logo-section">
            <img src="/assets/open-book.png" alt="" className="logo-image" />
            <Link to="/" className="logo">
              LinguaCraft
            </Link>
            <div className="explore-section">
              <button className="explore-btn">Explore</button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/community">
                    Community
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="register-section">
            <Link className="login" to="/login">
              Login
            </Link>
            <Link className="signUp" to="/signup">
              Sign Up
            </Link>

            <div className="menu-section">
              <img
                src="/assets/menu-bar.png"
                alt=""
                className="menu-bar"
                onClick={openDrawer}
              />
            </div>
          </div>
        </div>
      </header>

      <div className={`top-drawer ${isOpen ? "open" : ""}`}>
        <ul className="drawer-links" onClick={closeDrawer}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="drawer-buttons" onClick={closeDrawer}>
          <button className="login-1">Login</button>
          <button className="signUp-2">Sign Up</button>
        </div>
        <button className="close-drawer" onClick={closeDrawer}>
          &times;
        </button>
      </div>
      {isOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
    </>
  );
}

export default Navbar;
