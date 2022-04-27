import React from "react";
import "./Project1.css";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Trusted from "../components/Trusted";

const Project1 = () => {
  return (
    <div className="project1">
      <Navbar />
      <Intro />
      <Trusted />
      <Services />
      <Projects />
      <Blog />
      <Product />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Project1;
