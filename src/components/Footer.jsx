import React from "react";
import "./Footer.css";
import pch from "../assets/icons/pch.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-top">
        <div className="ready">Ready to make something kickass?</div>
        <div className="let">Let's get on a call.</div>
      </div>
      <div className="f-middle">
        <div className="f-middle-left">
          <div className="creater">
            Portfolio Creater<span>.</span>
          </div>
          <div className="number">4353 Delaware Avenue, San Francisco, USA</div>
          <div className="com">
            {" "}
            <img src={pch} alt="" /> hi@thefolio.com
          </div>
        </div>
        <div className="f-middle-right">
          <div className="f-first">
            <div className="item">About</div>
            <div className="item">Contact</div>
            <div className="item">Dribble</div>
          </div>
          <div className="f-first">
            <div className="item">About</div>
            <div className="item">Contact</div>
            <div className="item">Dribble</div>
          </div>
          <div className="f-first">
            <div className="item">About</div>
            <div className="item">Contact</div>
            <div className="item">Dribble</div>
          </div>
        </div>
      </div>
      <div className="f-last">© All rights reserved. Sumit Hegde . Powered by Webflow / Image License Info / Instructions / Changelog / Style Guide</div>
    </div>
  );
};

export default Footer;
