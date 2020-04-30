import React from "react";
import "./Main.css";
// import stairs from "../../Images/stairs.svg";
import grup2 from "../../Images/Group 2.png";
import furniture from "../../Images/furniture.png";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="text">
          <div className="text-left">
            <h1>Newsletter in minutes</h1>
            <p>
              Emails are traditionally painfully slow to work with. We’ve made a
              drag and drop tool that automatically fetches data and easily copy
              or send HTML using your favorite API.
            </p>
          </div>
        </div>
        <div className="image">
          <div className="grup2">
            <img src={grup2} alt="grup2" className="grup2-img" />
          </div>
        </div>
        <div className="content-footer">
          <div className="item-left">
            <h1>So affordable. Small teams OK</h1>
            <p>
              Some email services cost hundreds or thousands to send to a
              not-so-large audience. We’ll make sure you can stop worrying bout
              costs and more about sending your beautiful content!
            </p>
          </div>
          <div className="item-right">
            <img src={furniture} alt="lampu" className="grup2-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
