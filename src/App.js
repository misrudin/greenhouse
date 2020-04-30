import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
