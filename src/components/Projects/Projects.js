import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "../Button";

// import cards
import Cards from "../Cards";

function Projects() {
  return (
    <>
      <div>
        <Cards style={{ zIndex: 2 }} />
      </div>
    </>
  );
}

export default Projects;
