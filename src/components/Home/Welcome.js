import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <div className="container">
          <div className="welcome__wrapper">
            <div className="welcome__image">
              <img
                src="https://res.cloudinary.com/academist/image/upload/v1649323004/image-1-1024x976_hame7v.jpg"
                alt="welcome images"
              />
              <div className="welcome__image__experience">
                <div className="welcome__image__experience__area">
                  <div className="py-8 px-14 bg-primary-500 bg-opacity-60">
                    <h3 className="welcome__image__experience__area__year">
                      24
                    </h3>
                    <span>Years of</span>
                    <span>Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="welcome__content">
              <h5 className="welcome__content__subtitle">INN & SUITES</h5>
              <h1 className="welcome__content__title">
                Welcome to Spa & Relax Hotel
              </h1>
              <p className="welcome__content__description">
                Quisque vitae posuere libero. Phasellus feugiat erat sit amet
                dui condimentum imperdiet. Ut at libero nec ligula fringilla
                dictum sit amet id dui. Integer gravida dolor elit, sit amet
                vestibulum mi elementum eget. Nullam in nibh vitae magna tempus
                tincidunt ac sed ligula. Sed ornare eu dui a lobortis in hac
                habitasse.
              </p>
              <div className="welcome__content__horizontal-line"></div>
              <div className="welcome__content__email">
                <div className="col-span-6">
                  <h6>MAIN MAIL</h6>
                  <p>admin@gmail.com</p>
                </div>
                <div className="welcome__content__social-icons">
                  <h6>STAY TUNED</h6>
                  <ul>
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="welcome__contact">
          <h5 className="welcome__contact__reserve">Reserve a Room Now</h5>
          <img
            className="welcome__contact__image"
            src="https://res.cloudinary.com/academist/image/upload/v1649323004/icon-7_tqhpff.png"
            alt=""
          />
          <h5 className="welcome__contact__number">
            Direct Call +1 546 378 654
          </h5>
        </div>
      </div>
    </>
  );
};

export default Welcome;
