import React from "react";
import "./Projects.css";
import p1 from "../assets/images/p1.svg";
import p2 from "../assets/images/p2.svg";
import s from "../assets/icons/s.svg";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-top">
        <div className="p-left">
          <div className="p-left-title">PROJECTS</div>
          <div className="p-left-text">
            I bring results. <br />
            My clients are proof.
          </div>
        </div>
        <div className="p-right">
          <div className="p-right-btn">View all projects</div>
        </div>
      </div>
      <div className="project-buttom">
        <div className="b-container">
          <img src={p1} alt="" />
          <div className="b-desc">
            <div className="breading">Breading</div>
            <div className="titling">Soulful Rebrand</div>
            <div className="View">
              View project <img src={s} alt="" />
            </div>
          </div>
        </div>
        <div className="b-container">
          <img src={p2} alt="" />
          <div className="b-desc">
            <div className="breading">Breading</div>
            <div className="titling">Soulful Rebrand</div>
            <div className="View">
              View project <img src={s} alt="" />
            </div>
          </div>
        </div>
        <div className="b-container">
          <img src={p1} alt="" />
          <div className="b-desc">
            <div className="breading">Breading</div>
            <div className="titling">Soulful Rebrand</div>
            <div className="View">
              View project <img src={s} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
