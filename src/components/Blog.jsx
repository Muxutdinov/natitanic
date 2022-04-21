import React from "react";
import "./Blog.css";
import so from "../assets/icons/s-o.svg";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-left">
        <div className="b-blogs">blogs</div>
        <div className="latest">Latest Blogs</div>
        <div className="View-all">
          View all <img src={so} alt="" />
        </div>
      </div>
      <div className="blog-right">
        <div className="right-container">
          <div className="p-blog">April 16, 2021. 6 mins</div>
          <div className="b-text">
            Design tips for designers, that cover <br /> everything you need
          </div>
          <div className="read-wrapper">
            <div className="b-read">Read the article</div>
            <img src={so} alt="" />
          </div>
          <div className="border"></div>
          <div className="p-blog">April 16, 2021. 6 mins</div>
          <div className="b-text">
            Design tips for designers, that cover <br /> everything you need
          </div>
          <div className="read-wrapper">
            <div className="b-read">Read the article</div>
            <img src={so} alt="" />
          </div>
          <div className="border"></div>
          <div className="p-blog">April 16, 2021. 6 mins</div>
          <div className="b-text">
            Design tips for designers, that cover <br /> everything you need
          </div>
          <div className="read-wrapper">
            <div className="b-read">Read the article</div>
            <img src={so} alt="" />
          </div>
          <div className="border"></div>
          <div className="p-blog">April 16, 2021. 6 mins</div>
          <div className="b-text">
            Design tips for designers, that cover <br /> everything you need
          </div>
          <div className="read-wrapper">
            <div className="b-read">Read the article</div>
            <img src={so} alt="" />
          </div>
          <div className="border"></div>
          <div className="p-blog">April 16, 2021. 6 mins</div>
          <div className="b-text">
            Design tips for designers, that cover <br /> everything you need
          </div>
          <div className="read-wrapper">
            <div className="b-read">Read the article</div>
            <img src={so} alt="" />
          </div>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
