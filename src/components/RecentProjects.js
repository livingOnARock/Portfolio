import React, { Component } from "react";

var amount = 1530;
var initial = 0;

export default class RecentProjects extends Component {
  leftBtnPush = () => {
    if (initial == 0) {
      initial = -4590;
    } else {
      initial += amount;
    }
    this.refs.projects.style.transform = `translateX(${initial}px)`;
  };
  rightBtnPush = () => {
    if (initial === -4590) {
      initial = 0;
    } else {
      initial -= amount;
    }
    this.refs.projects.style.transform = `translateX(${initial}px)`;
  };
  render() {
    return (
      <div className="RecentProjects">
        <h1>MY PORTFOLIO</h1>
        <div>
          <div className="projectWrapper">
            <div className="projects" ref="projects">
              <div className="project">1</div>
              <div className="project">2</div>
              <div className="project">3</div>
              <div className="project">4</div>
              <div className="project">5</div>
              <div className="project">6</div>
              <div className="project">7</div>
              <div className="project">8</div>
              <div className="project">9</div>
              <div className="project">10</div>
              <div className="project">11</div>
              <div className="project">12</div>
            </div>
          </div>
          <div className="buttonWrapper">
            <button id="btnLeft" onClick={this.leftBtnPush}>
              ---
            </button>
            <button>See All Projects</button>
            <button id="btnRight" onClick={this.rightBtnPush}>
              ---
            </button>
          </div>
        </div>
      </div>
    );
  }
}
