import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__image">
            <img
              src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/12/image-1-1024x976.jpg"
              alt="welcome images"
            />
            <div className="welcome__image__experience">
              <div className="welcome__image__experience__area">
                <div style={{backgroundColor: "#c19b7763"}}>
                  <h3 className="welcome__image__experience__area__year">
                    24
                  </h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome__content">
            <p>INN & SUITES</p>
            <h3>Welcome to Spa & Relax Hotel</h3>
            <p>
              Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui
              condimentum imperdiet. Ut at libero nec ligula fringilla dictum
              sit amet id dui. Integer gravida dolor elit, sit amet vestibulum
              mi elementum eget. Nullam in nibh vitae magna tempus tincidunt ac
              sed ligula. Sed ornare eu dui a lobortis in hac habitasse.
            </p>
            <span></span>
            <div className="flex">
              <div className="">
                <h6>MAIN MAIL</h6>
                <p>info@hotel.com</p>
              </div>
              <div className="">
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
  );
};

export default Welcome;
