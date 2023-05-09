import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import "boxicons";

const Skills = () => {
  return (
    <div className="allcontent">
      <section className="skills_section" id="skills ">
        <h2 className="skill">Skills</h2>
        <span className="tech">My Technical level</span>

        <div className="table">
          <Frontend />
        </div>
      </section>
    </div>
  );
};

export default Skills;
