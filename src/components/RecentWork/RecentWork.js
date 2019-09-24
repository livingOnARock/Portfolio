import React from "react";
import ToolTitanScreenshot from "../../assets/images/ToolTitanScreenshot.JPG";
import MovieSearchScreenshot from "../../assets/images/movie-search-screenshot.png";
import DigitalContactsImg from "../../assets/images/DigitalContactsScreenShot.PNG";
import PoweredByYelpImg from "../../assets/images/PoweredByYelp.PNG";
import FlavorImg from "../../assets/images/FlavorImg.JPG";
import ReactQuiz from "../../assets/images/react-quiz.JPG";

import "./RecentWork.scss";

const RecentWork = () => {
  return (
    <section className="RecentWork" id="RecentWork">
      <a className="RecentWork__header">Portfolio</a>
      <div className="RecentWork__projects">
        <div className="RecentWork__project">
          <div className="RecentWork__project--front">
            <img
              className="RecentWork__project--image"
              src={ToolTitanScreenshot}
              alt="screenshot"
            />
          </div>
          <div className="RecentWork__project--back">
            <a className="RecentWork__project--heading-primary">Tool Titan</a>
            <a className="RecentWork__project--heading-secondary">
              E-commerce site built with React, NodeJS, ExpressJS and firebase.
              It also uses and to handle user Authentication
            </a>
            <div className="RecentWork__btns">
              <a
                href="https://friendly-mestorf-ef93df.netlify.com"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Project
              </a>
              <a
                href="https://github.com/livingOnARock/ToolTitan"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="RecentWork__project">
          <div className="RecentWork__project--front">
            <img
              className="RecentWork__project--image"
              src={MovieSearchScreenshot}
              alt="screenshot"
            />
          </div>
          <div className="RecentWork__project--back">
            <a className="RecentWork__project--heading-primary">Media Search</a>
            <a className="RecentWork__project--heading-secondary">
              React app used to search media through the MovieDB API
            </a>
            <div className="RecentWork__btns">
              <a
                href="https://reverent-jang-1f8c60.netlify.com/"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Project
              </a>
              <a
                href="https://github.com/livingOnARock/Lightning-Movie-Search"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="RecentWork__project">
          <div className="RecentWork__project--front">
            <img
              className="RecentWork__project--image"
              src={DigitalContactsImg}
              alt="screenshot"
            />
          </div>
          <div className="RecentWork__project--back">
            <a className="RecentWork__project--heading-primary">
              DigitalAddressBook
            </a>
            <a className="RecentWork__project--heading-secondary">
              MERN App to keep Personal and Professional Contacts
            </a>
            <div className="RecentWork__btns">
              <a
                href="https://digital-address-book.herokuapp.com/"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Project
              </a>
              <a
                href="https://github.com/livingOnARock/address-book"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="RecentWork__project">
          <div className="RecentWork__project--front">
            <img
              className="RecentWork__project--image"
              src={PoweredByYelpImg}
              alt="screenshot"
            />
          </div>
          <div className="RecentWork__project--back">
            <a className="RecentWork__project--heading-primary">
              Powered by Yelp
            </a>
            <a className="RecentWork__project--heading-secondary">
              Front End App to Search businesses through Yelp API
            </a>
            <div className="RecentWork__btns">
              <a
                href="https://search-yelp.herokuapp.com/"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Project
              </a>
              <a
                href="https://github.com/livingOnARock/PoweredByYelp"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Code
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="RecentWork__project">
          <div className="RecentWork__project--front">
            <img
              className="RecentWork__project--image"
              src={FlavorImg}
              alt="screenshot"
            />
          </div>
          <div className="RecentWork__project--back">
            <a className="RecentWork__project--heading-primary">
              Flavor Restaurant
            </a>
            <a className="RecentWork__project--heading-secondary">
              Restaurant website made with react
            </a>
            <div className="RecentWork__btns">
              <a
                href="https://flavor-restaurant.herokuapp.com"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Project
              </a>
              <a
                href="https://github.com/livingOnARock/Flavor"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Code
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="RecentWork__project">
          <div className="RecentWork__project--front">
            <img
              className="RecentWork__project--image"
              src={ReactQuiz}
              alt="screenshot"
            />
          </div>
          <div className="RecentWork__project--back">
            <a className="RecentWork__project--heading-primary">React Quiz</a>
            <a className="RecentWork__project--heading-secondary">
              React app that lets you take the quiz of your choice
            </a>
            <div className="RecentWork__btns">
              <a
                href="https://fast-dusk-40061.herokuapp.com/"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Project
              </a>
              <a
                href="https://github.com/livingOnARock/react-quiz"
                target="_blank"
                variant="primary"
                className="RecentWork__btn btn btn--project"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
