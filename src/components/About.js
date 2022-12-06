import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./About.css";

function About() {
  return (
    <div className="hero-container">
      <video src="/videos/video-4.mp4" autoPlay loop muted />

      <h1>R E V A T H I</h1>
      <p>Welcome to my world!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ABOUT ME
        </Button>
      </div>
    </div>
  );
}

export default About;
