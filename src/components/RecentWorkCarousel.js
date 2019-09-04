import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import DigitalContactsImg from "../srcImgs/DigitalContactsScreenShot.PNG";
import PoweredByYelpImg from "../srcImgs/PoweredByYelp.PNG";
import FlavorImg from "../srcImgs/FlavorImg.JPG";
import ReactQuiz from "../srcImgs/react-quiz.JPG";
import MovieSearchScreenshot from "../srcImgs/movie-search-screenshot.png";
import ToolTitanScreenshot from "../srcImgs/ToolTitanScreenshot.JPG";

const RecentWorkCarousel = () => {
  return (
    <div
      style={{
        margin: "50px auto 50px auto",
        padding: "50px 0",
        backgroundColor: "#3c424f"
      }}
    >
      <h1 className="mx-auto   mb-4 text-white">Recent Work</h1>
      <Carousel>
        <Carousel.Item className="mb-5 text-white">
          <img src={ToolTitanScreenshot} alt="First slide" className="mb-3" />

          <h3>Tool Titan</h3>

          <p>
            E-commerce site built with React and firebase. It also uses Node.js
            and Express.js to handle user Authentication
          </p>

          <Button
            href="https://friendly-mestorf-ef93df.netlify.com"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            Veiw Project
          </Button>
          <Button
            href="https://github.com/livingOnARock/ToolTitan"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            View Code
          </Button>
        </Carousel.Item>
        <Carousel.Item className="mb-5 text-white">
          <img
            src={MovieSearchScreenshot}
            alt="Movie search slide"
            className="mb-3"
          />

          <h3>Media Search</h3>

          <p>React app used to search media through the MovieDB API;</p>

          <Button
            href="https://reverent-jang-1f8c60.netlify.com/"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            Veiw Project
          </Button>
          <Button
            href="https://github.com/livingOnARock/Lightning-Movie-Search"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            View Code
          </Button>
        </Carousel.Item>
        <Carousel.Item className="mb-5 text-white">
          <img src={DigitalContactsImg} alt="secondSlide" className="mb-3" />

          <h3>DigitalAddressBook</h3>

          <p>MERN App to keep Personal and Professional Contacts</p>

          <Button
            href="https://digital-address-book.herokuapp.com/"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            Veiw Project
          </Button>
          <Button
            href="https://github.com/livingOnARock/address-book"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            View Code
          </Button>
        </Carousel.Item>
        <Carousel.Item className="mb-5 text-white">
          <img src={PoweredByYelpImg} alt="second slide" className="mb-3" />

          <h3>Powered by Yelp</h3>

          <p>Front End App to Search businesses through Yelp API</p>

          <Button
            href="https://search-yelp.herokuapp.com/"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            Veiw Project
          </Button>
          <Button
            href="https://github.com/livingOnARock/PoweredByYelp"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            View Code
          </Button>
        </Carousel.Item>
        <Carousel.Item className="mb-5 text-white">
          <img src={FlavorImg} alt="First slide" className="mb-3" />

          <h3>Flavor restaurant website</h3>

          <p>Restaurant website made with react</p>

          <Button
            href="https://flavor-restaurant.herokuapp.com"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            Veiw Project
          </Button>
          <Button
            href="https://github.com/livingOnARock/Flavor"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            View Code
          </Button>
        </Carousel.Item>
        <Carousel.Item className="mb-5 text-white">
          <img src={ReactQuiz} alt="First slide" className="mb-3" />

          <h3>React Quiz</h3>

          <p>React app that lets you take the quiz of your choice</p>

          <Button
            href="https://fast-dusk-40061.herokuapp.com/"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            Veiw Project
          </Button>
          <Button
            href="https://github.com/livingOnARock/react-quiz"
            target="_blank"
            variant="primary"
            className="m-2"
          >
            View Code
          </Button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RecentWorkCarousel;
