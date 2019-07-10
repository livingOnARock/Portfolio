import React from "react";

const Contact = () => {
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
          width: "820px",
          padding: "10px",
          backgroundColor: "white",
          color: "#3c424f",
          borderRadius: "15px",
          margin: "auto"
        }}
      >
        <div
          style={{
            width: "800px",
            border: "solid 3px #3c424f",
            margin: "auto",
            padding: "70px 0",
            color: "#3c424f",
            borderRadius: "15px"
          }}
        >
          <h1>How To Contact Me</h1>
          <div
            id="email-info"
            style={{
              display: "inline-flex",
              padding: "0"
            }}
          >
            <div
              id="phone"
              style={{
                border: "solid 3px #3c424f",
                borderRadius: "10px",
                margin: "20px",
                padding: "20px"
              }}
            >
              <h4>Phone:</h4>
              <h3>214-663-7194</h3>
            </div>
            <div
              id="email-info"
              style={{
                border: "solid 3px #3c424f",
                borderRadius: "10px",
                margin: "20px",
                padding: "20px"
              }}
            >
              <div id="email">
                <h4>Email:</h4>
                <h3>Jasonof86@hotmail.com</h3>
              </div>
            </div>
          </div>
          <div id="git">
            <a
              style={{
                padding: "10px 20px",
                fontSize: "large",
                backgroundColor: "#3c424f",
                color: "white"
              }}
              href={"https://github.com/livingOnARock/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
