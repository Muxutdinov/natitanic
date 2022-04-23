import React from "react";
import "./Testimonials.css";
import boy from "../assets/images/boy.svg";
import q from "../assets/icons/q.svg";
import tl from '../assets/icons/t-l.svg'
import tr from '../assets/icons/t-r.svg'

const Testimonials = () => {
  return (
    <div className="t-container">
      <div className="testimonials">Testimonials</div>
      <div className="street">Word on the street</div>
      <div className="t-wrapper">
        <div className="t-wrapper-left">
          <img src={boy} alt="" />
        </div>
        <div className="t-wrapper-right">
          <div className="q-wrapper">
            <img src={q} alt="" />
          </div>
          <div className="t-text">
            Jade helped us build a software so intuitive that it didn't need a
            walkthrough. He solved complex problems with brilliant design.
          </div>
          <div className="john-wrapper">
              <div className="t-bottom-left">
                  <div className="t-bottom-title">John Frankin</div>
                  <div className="t-bottom-text">Founder, Double Bunch</div>
              </div>
              <div className="t-bottom-right">
                  <div className="t-bottom-right-icon"><img src={tl} alt="" /></div>
                  <div className="t-bottom-right-icon"><img src={tr} alt="" /></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
