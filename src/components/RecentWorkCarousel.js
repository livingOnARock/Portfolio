import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import DigitalContactsImg from "../srcImgs/DigitalContactsScreenShot.PNG";
import PoweredByYelpImg from "../srcImgs/PoweredByYelp.PNG";

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
          <img src={DigitalContactsImg} alt="First slide" className="mb-3" />

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
            href="https://github.com/livingOnARock/DigitalAddressBook"
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

          <p>Front End App to keep Personal and Professional Contacts</p>

          <Button
            href="https://powered-by-yelp.herokuapp.com/"
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
          <img src={DigitalContactsImg} alt="First slide" className="mb-3" />

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
            href="https://github.com/livingOnARock/DigitalAddressBook"
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
