import React from "react";
import "./Content.css";
import group from "../../Images/Group.png";
import luggage from "../../Images/luggage.png";

const Content = () => {
  return (
    <>
      <div className="container-content">
        <div className="group">
          <img src={group} alt="group" />
        </div>
        <div className="lugage">
          <img src={luggage} alt="lugage" />
          <h1>Works with XD, Figma and Sketch </h1>
          <p>
            Ever wanted to export your designs directly from your favorite
            design tool to your Email service? Now you can. From layers to HTML,
            to people’s inbox.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
