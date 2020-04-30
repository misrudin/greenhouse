import React, { useEffect } from "react";
import "./Splash.css";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import { saveToken } from "../redux/actions/auth";

const Splash = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("Token")) {
        dispatch(saveToken("iniToken"));
        props.history.push("/home");
      } else {
        props.history.push("/auth");
      }
    }, 2000);
  }, []);

  useEffect(() => {
    document.getElementById("title").innerText = "E-Learning";
  }, []);

  return (
    <div className="container-fluid splash">
      <div className="anim">
        <div className="anim-item"></div>
      </div>
    </div>
  );
};

export default Splash;
