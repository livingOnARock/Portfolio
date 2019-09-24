import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <section title="Contact" name="Contact" className="Contact" id="Contact">
      <div className="Contact__header">
        <span className="Contact__header--primary">Contact Me</span>
      </div>
      <div className="Contact__content">
        <div className="Contact__content--header">
          <i class="fas fa-user Contact__content--header--logo logo-blue"></i>
          <div className="Contact__content--header-text">
            <p className="Contact__content--header-primary">Jason Hastey</p>
            <p className="Contact__content--header-secondary">
              Front End Developer
            </p>
          </div>
        </div>
        <div className="Contact__methods">
          <div className="Contact__methods--container">
            <div className="Contact__method">
              <div className="Contact__method__logo-container">
                <i className="fas fa-phone-alt Contact__method__logo"></i>
              </div>
              <span className="Contact__method__description Contact__method__description--blue">
                Phone
              </span>
            </div>
            <span className="Contact__method__contact">214-663-7194</span>
          </div>

          <div className="Contact__methods--container">
            <div className="Contact__method">
              <div className="Contact__method__logo-container">
                <i className="fas fa-envelope Contact__method__logo Contact__method__logo--green"></i>
              </div>
              <span className="Contact__method__description">email</span>
            </div>
            <span className="Contact__method__contact ">
              Jasonof86@hotmail.com
            </span>
          </div>
          <a href="mailto:jasonof86@hotmail.com" className="btn btn--contrast">
            Email Direct
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
