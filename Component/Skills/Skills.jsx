import React from "react";
import "./skills.css";
export default function Skills() {
  return (
    <div id="skills">
      <span className="skillTitle">SKILLS</span>
      <div className="skillBars">
        <div className="skillbar">
          <img src="../images/react.png" alt="" className="skillBarImage" />
          <div className="skillBarText">
            <h2>React</h2>
          </div>
        </div>

        <div className="skillbar">
          <img src="../images/javascript.png" alt="" className="skillBarImage" />

          <div className="skillBarText">
            <h2>JavaScript</h2>
          </div>
        </div>
        <div className="skillbar">
          <img src="../images/CSS-Logo.png" alt="" className="skillBarImage" />
          <div className="skillBarText">
            <h2>CSS</h2>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillbar">
          <img src="../images/html5.png" alt="" className="skillBarImage" />
          <div className="skillBarText">
            <h2>HTML5</h2>
          </div>
        </div>

        <div className="skillbar">
          <img src="../images/Bootstrap_logo.svg.png" alt="" className="skillBarImage" />
          <div className="skillBarText">
            <h2>Bootstrap</h2>
          </div>
        </div>
        <div className="skillbar">
          <img src="../images/node.png" alt="" className="skillBarImage" />
          <div className="skillBarText">
            <h2>Node </h2>
          </div>
        </div>
      </div>

    </div>
  );
}
