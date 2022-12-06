import React from "react";
import Timeline from "./Timeline";

function Education() {
  const items = [
    {
      title: "Graduate: MS in Computer Science",
      description: "University of Pennsylvania (2021-2023)",
    },
    {
      title: "Undergraduate: B.Tech in Computer Science",
      description: "VJTI, Mumbai (2017-2021)",
    },
  ];

  return <Timeline items={items} />;
}

export default Education;
