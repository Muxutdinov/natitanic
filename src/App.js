import React from "react";
import "./App.css";
import Blog from "./components/Blog";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <Trusted />
      <Services />
      <Projects />
      <Blog />
    </div>
  );
};

export default App;
