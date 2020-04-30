import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../../redux/actions/auth";
import "./style.css";
import { Redirect } from "react-router-dom";

const LoginAdmin = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveToken("inniTokenkjjsjfhsmdfnjsdf"));
  }, []);

  useEffect(() => {
    document.getElementById("title").innerText = "Admin";
  }, []);

  return !localStorage.getItem("Token") ? (
    <div className="container-fluid login">
      <div className="content">
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label font-weight-bold">
              Username
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control shadow-sm border-0"
                name="username"
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label font-weight-bold">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control shadow-sm border-0"
                name="password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block buton"
            onClick={() => props.history.push("/home")}
          >
            Masuk
          </button>
          <button
            className="btn btn-danger btn-block buton-sec"
            onClick={() => props.history.push("/auth")}
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/home" />
  );
};

export default LoginAdmin;
