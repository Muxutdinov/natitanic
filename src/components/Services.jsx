import React from "react";
import "./Services.css";
import s1 from "../assets/icons/s1.svg";
import s2 from "../assets/icons/s2.svg";
import s3 from "../assets/icons/s3.svg";
import o from "../assets/icons/o.svg";

const Services = () => {
  return (
    <div className="Services">
      <div className="s-title">Services</div>
      <div className="s-text-big">
        Design that solves problems, one product at a time.
      </div>
      <div className="services-content-wrapper">
        <div className="services-content">
          <img src={s1} alt="" />
          <div className="for-you">What I can do for you</div>
          <div className="services-content-text">
            Faster, better products that your users love. Here's all the
            services I provide:
          </div>
          <div className="web">
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Design Strategy</div>
            </div>
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Web and Mobile App Design</div>
            </div>
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Front-end Development</div>
            </div>
          </div>
        </div>
        <div className="services-content">
          <img src={s2} alt="" />
          <div className="for-you">Applications I'm fluent in</div>
          <div className="services-content-text">
            Faster, better products that your users love. Here's all the
            services I provide:
          </div>
          <div className="web">
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Design Strategy</div>
            </div>
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Web and Mobile App Design</div>
            </div>
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Front-end Development</div>
            </div>
          </div>
        </div>
        <div className="services-content">
          <img src={s3} alt="" />
          <div className="for-you">What you can expect</div>
          <div className="services-content-text">
            Faster, better products that your users love. Here's all the
            services I provide:
          </div>
          <div className="web">
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Design Strategy</div>
            </div>
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Web and Mobile App Design</div>
            </div>
            <div className="web-item-wrapper">
              <img src={o} alt="" />{" "}
              <div className="web-item">Front-end Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
