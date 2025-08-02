import { Link } from "react-router-dom";
import "../index.css";
import "./Navbar.css";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <img
                src="/assets/menu-bar.png"
                alt=""
                className="menu-bar"
                onClick={openDrawer}
              />
              <img src="/assets/delete2.png" alt="" className="close-btn" />
            </div>
          </div>
        </div>
      </header>

      <div className={`top-drawer ${isOpen ? "open" : ""}`}>
        <ul className="drawer-links" onClick={closeDrawer}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Courses</Link>
          </li>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Community</Link>
          </li>
          <li>
            <Link>About</Link>
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
