/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { ImUser } from "react-icons/im";
const HotelNews = () => {
  return (
    <div className="hotel-news">
      <div className="container">
        <div className="hotel-news__info ">
          <p>STAY TUNED</p>
          <h1>Hotel News</h1>
          <p>
            Quisque vitae posuere libero. feugiat erat sit amet dui condimentum
            imperdiet. <br /> Ut at libero nec ligula fringilla dictum sit amet
            id dui. Integer gravida dolor elit, <br />
            sit amet vestibulum mi elementum eget.
          </p>
        </div>

        <div className="hotel-news__wrapper">
          <div className="hotel-news__wrapper__card-one">
            <div className="hotel-news__wrapper__linkup">
              <a href="https://rhsanto.com" target="_blank">
                {" "}
                <p>WWW.rhsanto.com</p>
              </a>
            </div>
            <div className="hotel-news__wrapper__cards">
              <img
                src="https://res.cloudinary.com/academist/image/upload/v1649323144/post-04_apuvan.jpg"
                alt=""
              />
              <div className="box">
                <p>
                  {" "}
                  <b>31</b> DEC
                </p>
              </div>
              <div className="hotel-news__wrapper__cards__card-body">
                <p>SUITES</p>
                <h5>Room Services</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  pharetra, risus ac hendrerit consectetur, elit nisl luctus
                  est.
                </p>
                <div className="hotel-news__wrapper__card__card-body__comments">
                  <p>
                    <ImUser className="mr-1" />
                    Shakib
                  </p>
                  <p>
                    <AiOutlineComment className="mr-1" /> 2 Comments
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hotel-news__wrapper__card-two">
            <div className="hotel-news__wrapper__card">
              <img
                src="https://res.cloudinary.com/academist/image/upload/v1649323144/post-02_jx8dbe.jpg"
                alt=""
              />
              <div className="box">
                <p>
                  {" "}
                  <b>14</b> FEB
                </p>
              </div>
              <div className="hotel-news__wrapper__card__card-body">
                <p>SUITES</p>
                <h5>24h Reception</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  pharetra, risus ac hendrerit consectetur, elit nisl luctus
                  est.
                </p>
                <div className="hotel-news__wrapper__card__card-body__comments">
                  <p>
                    <ImUser className="mr-1" />
                    Fahad
                  </p>
                  <p>
                    <AiOutlineComment className="mr-1" /> 2 Comments
                  </p>
                </div>
              </div>
            </div>
            <div className="hotel-news__wrapper__card-two__mini-card mt-7">
              <div className="hotel-news__wrapper__card-two__mini-card__info">
                <p>Rooms</p>
                <h4>Main Hall</h4>
              </div>
            </div>
          </div>
          <div className="hotel-news__wrapper__card-three">
            <div className="hotel-news__wrapper__message">
              <p>
                A excellent restaurant is like a tasty & good vacation. EMILY
                MILLER{" "}
                <img
                  className="w-6 mx-auto my-2"
                  src="https://res.cloudinary.com/academist/image/upload/v1649323144/quote-icon_ayw4u4.png"
                  alt=""
                />
              </p>
            </div>
            <div className="hotel-news__wrapper__card mt-7">
              <img
                src="https://res.cloudinary.com/academist/image/upload/v1649323145/post-05_dwzkfr.jpg"
                alt=""
              />
              <div className="box">
                <p>
                  {" "}
                  <b>24</b> MAR
                </p>
              </div>
              <div className="hotel-news__wrapper__card__card-body">
                <p>SUITES</p>
                <h5>Daily Sanitation</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  pharetra, risus ac hendrerit consectetur, elit nisl luctus
                  est.
                </p>
                <div className="hotel-news__wrapper__card__card-body__comments">
                  <p>
                    <ImUser className="mr-1" />
                    Rashedul
                  </p>
                  <p>
                    <AiOutlineComment className="mr-1" /> 2 Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelNews;
