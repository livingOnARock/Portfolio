import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#3c424f",
        color: "white",
        justifyContent: "center",
        paddingTop: "200px"
      }}
      id="about"
    >
      <div
        style={{
          width: "620px",
          padding: "10px",
          backgroundColor: "white",
          color: "#3c424f",
          borderRadius: "15px",
          margin: "auto"
        }}
      >
        <div
          style={{
            width: "600px",
            border: "solid 3px #3c424f",
            margin: "auto",
            padding: "70px",
            color: "#3c424f",
            borderRadius: "15px"
          }}
        >
          <h1>About</h1>
          <div id="about-info">
            <div id="professional">
              <div>
                <h4>Front-end Developer</h4>
                <p>
                  Hello, I am a front end web-developer based out of Dallas, Tx.
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
              </div>
            </div>
          </div>
          <button
            style={{
              width: "80%",
              fontSize: "x-large",
              borderRadius: "5px",
              padding: "5px",
              backgroundColor: "#3c424f",
              color: "white",
              marginTop: "10px"
            }}
          >
            <Link to="/contact">Contact </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
