import React from "react";
import "./style.css";
import logo from "../../Images/logo.png";

// const navUl = document.querySelector("nav ul");

// const openMenu = () => {
//   navUl.classList.toggle("slide");
// };

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Letter</h2>
      </div>

      <ul className="ul">
        <li>
          <p>Plugins</p>
        </li>
        <li>
          <p>Pricing</p>
        </li>
        <li>
          <p>Sign in</p>
        </li>
        <li className="active">
          <p>Free Trial</p>
        </li>
      </ul>
      <div className="menu-toggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
