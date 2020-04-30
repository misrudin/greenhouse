import React from "react";
import "./Footer.css";
import trial from "../../Images/climbing.png";

const Footer = () => {
  return (
    <>
      <div className="trial">
        <img src={trial} alt="trial" width="30%" />
        <h1>Start free trial</h1>
        <p>So affordable you won’t believe it. Cancel anytime.</p>
        <div className="button-trial">Let me in!</div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <li>
              <p>About</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Sign In</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Comunity</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Pricing</p>
            </li>
          </ul>
          <ul>
            <li className="active">
              <p>Free Trial</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Updates</p>
            </li>
          </ul>
        </div>
        <div className="copy">
          <p>2019. Terms - Privacy. By the teams behind Greenhouse.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
