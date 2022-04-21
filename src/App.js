import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Intro/>
    </div>
  );
};

export default App;
