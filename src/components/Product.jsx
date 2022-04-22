import React from "react";
import "./Product.css";
import r1 from "../assets/images/r1.svg";
import r2 from "../assets/images/r2.svg";
import r3 from "../assets/images/r3.svg";
import r4 from "../assets/images/r4.svg";
import ts from "../assets/icons/ts.svg";

const Product = () => {
  return (
    <div className="product">
      <div className="p-first">
        <div className="p-first-left">
          <div className="Product-Designer">Product Designer</div>
          <div className="That">That's me!</div>
        </div>
        <div className="p-first-right">
          <div className="p-first-text">
            Over the past 12 years, I've worked with a diverse range of clients,
            from startups to Fortune 500 companies. I love crafting interfaces
            that delight users and help businesses grow.
          </div>
        </div>
      </div>
      <div className="p-second">
        <div className="p-second-item">
          <img className="r1" src={r1} alt="" />
        </div>
        <div className="p-second-item">
          <img className="r2" src={r2} alt="" />
        </div>
        <div className="p-second-item">
          <img className="r3" src={r3} alt="" />
          <img className="r4" src={r4} alt="" />
        </div>
      </div>
      <div className="p-third">
        <div className="p-third-left">
          <div className="p-third-left-item">
            <div className="p-third-left-item-title">📚 Education</div>
          </div>
          <div className="p-third-left-item">
            <div className="p-third-left-item-left">
              <div className="p-third-left-item-left-title">
                Stanford University
              </div>
              <div className="p-third-left-item-left-text">
                MSc (Human Computer Interaction)
              </div>
            </div>
            <div className="p-third-left-item-right">
              <img className="s-test" src={ts} alt="" />
              <div className="date">• 2013-2015</div>
            </div>
          </div>
          <div className="border"></div>
          <div className="p-third-left-item">
            <div className="p-third-left-item-left">
              <div className="p-third-left-item-left-title">
                Stanford University
              </div>
              <div className="p-third-left-item-left-text">
                MSc (Human Computer Interaction)
              </div>
            </div>
            <div className="p-third-left-item-right">
              <img className="s-test" src={ts} alt="" />
              <div className="date">• 2013-2015</div>
            </div>
          </div>
          <div className="border"></div>
          <div className="p-third-left-item">
            <div className="p-third-left-item-left">
              <div className="p-third-left-item-left-title">
                Stanford University
              </div>
              <div className="p-third-left-item-left-text">
                MSc (Human Computer Interaction)
              </div>
            </div>
            <div className="p-third-left-item-right">
              <img className="s-test" src={ts} alt="" />
              <div className="date">• 2013-2015</div>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div className="p-third-right">
          <div className="p-third-left-item">
            <div className="p-third-left-item-title">💼 Work Experience</div>
          </div>
          <div className="p-third-left-item">
            <div className="p-third-left-item-left">
              <div className="p-third-left-item-left-title">
                Stanford University
              </div>
              <div className="p-third-left-item-left-text">
                MSc (Human Computer Interaction)
              </div>
            </div>
            <div className="p-third-left-item-right">
              <img className="s-test" src={ts} alt="" />
              <div className="date">• 2013-2015</div>
            </div>
          </div>
          <div className="border"></div>
          <div className="p-third-left-item">
            <div className="p-third-left-item-left">
              <div className="p-third-left-item-left-title">
                Stanford University
              </div>
              <div className="p-third-left-item-left-text">
                MSc (Human Computer Interaction)
              </div>
            </div>
            <div className="p-third-left-item-right">
              <img className="s-test" src={ts} alt="" />
              <div className="date">• 2013-2015</div>
            </div>
          </div>
          <div className="border"></div>
          <div className="p-third-left-item">
            <div className="p-third-left-item-left">
              <div className="p-third-left-item-left-title">
                Stanford University
              </div>
              <div className="p-third-left-item-left-text">
                MSc (Human Computer Interaction)
              </div>
            </div>
            <div className="p-third-left-item-right">
              <img className="s-test" src={ts} alt="" />
              <div className="date">• 2013-2015</div>
            </div>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
