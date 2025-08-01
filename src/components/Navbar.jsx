import "./Navbar.css";
import "../index.css";
import { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const closeNavbar = () => {
    setToggleNavbar(false);
    setIsHidden(false);
  };
  const openNavbar = () => {
    setToggleNavbar(true);
    setIsHidden(true);
  };

  return (
    <div className="header-wrapper">
      <header className="container header-container">
        <nav>
          <figure className="logo">
            <img src="/assets/book.png" alt="logo" />
            <span>LinguaCraft</span>
          </figure>
          <ul className={`${toggleNavbar ? "closeNav" : "openNav"}`}>
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
          <div className={`register ${toggleNavbar ? "closeNav" : "openNav"}`}>
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signUp">Sign up</button>
            <span></span>
          </div>
          {isHidden && (
            <img
              src="/assets/delete2.png"
              alt=""
              className="close-btn"
              onClick={closeNavbar}
            />
          )}
          {!isHidden && (
            <img
              src="/assets/menu-bar.png"
              alt=""
              className="menu-bar"
              onClick={openNavbar}
            />
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
