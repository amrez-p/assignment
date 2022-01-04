import React from "react";
import NavBg from "../images/navBG.png";
function Navbar() {
  return (
    <div className="navbar">
      <img className="navBg" src={NavBg} alt="NavLogo" />
      <div className="navWrapper">
        <div className="navLeft">
          <NavLeft />
        </div>
        <div className="navRight">
          <a
            href="/"
            className="Link cart"
            style={{
              marginRight: "20px",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            <i class="fas fa-shopping-cart"></i> Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

const NavLeft = () => {
  return (
    <>
      <ul className="navLinks">
        <li>
          <a href="/" className="Link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="Link">
            Review
          </a>
        </li>
        <li>
          <a href="/" className="Link">
            Faq
          </a>
        </li>
        <li>
          <a href="/" className="Link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="Link">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
