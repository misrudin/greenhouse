import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  const { token, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoading) {
      props.history.push("/auth");
    }
  }, []);

  useEffect(() => {
    document.getElementById("title").innerText = "E-Learning : Auth";
  }, []);

  return !localStorage.getItem("Token") ? (
    <div className="container-fluid bg-gradient auth">
      <div className="content">
        <div className="title">
          <p className="text-secondary">Silahkan pilih menu Login!</p>
        </div>
        <div className="menu-login">
          <button
            className="btn btn-primary btn-block buton m-1 rounded-circle"
            onClick={() => props.history.push("/admin")}
          >
            Admin
          </button>

          <button
            className="btn btn-primary btn-block buton m-1  rounded-circle"
            onClick={() => props.history.push("/guru")}
          >
            Guru
          </button>

          <button
            className="btn btn-primary btn-block buton m-1  rounded-circle"
            onClick={() => props.history.push("/siswa")}
          >
            Siswa
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/home" />
  );
};

export default Auth;
