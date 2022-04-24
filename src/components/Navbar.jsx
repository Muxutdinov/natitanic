import React from "react";
import "./Navbar.css";
import portfolio from "../assets/images/portfolio.svg";
import s from "../assets/icons/s.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="n-left">
        <img src={portfolio} alt="" />
      </div>
      <div className="n-right">
        <div className="n-item">About</div>
        <div className="n-item">Services</div>
        <div className="n-item">Projects</div>
        <div className="n-item">Blog</div>
        <div className="n-item">Book a call</div>
        <img className="n-item" src={s} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
