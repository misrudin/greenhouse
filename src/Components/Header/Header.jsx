import React from "react";
import "./Header.css";
import moon from "../../Images/sun.png";
import lamp from "../../Images/lamp.png";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <img src={lamp} alt="Lamp" className="lamp-img" />
        <div className="content-header">
          <h2>Email for Designers</h2>
          <p>
            Dynamic email tool for creators that doesn’t cost a leg. Works with
            Sketch, Figma and XD. Easily import your content and send with your
            favorite API.
          </p>
          <div className="button">Start Free Trial</div>
        </div>
        <div className="moon">
          <img src={moon} alt="moon" />
        </div>
      </div>
    </>
  );
};

export default Header;
