import React from "react";
import "./Intro.css";
import s from '../assets/icons/s.svg'
import people from '../assets/images/people.svg'


const Intro = () => {
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-left-title">
          <span>I design products</span>
          <br />
          that delight and <br />
          inspire people.
        </div>
        <div className="i-left-text">
          Hi! I’m Jake, a product designer based in Berlin. I create
          user-friendly interfaces for fast-growing startups.
        </div>
        <div className="i-left-btns">
            <div className="btn">Book a call</div>
            <div className="btn btn-CV">Download CV <span><img src={s} /></span></div>
        </div>
      </div>
      <div className="i-right">
          <img src={people} alt="" />
      </div>
    </div>
  );
};

export default Intro;
