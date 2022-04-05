/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Services = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="service__wrapper">
          <div className="service__wrapper__first-item">
            <div></div>
          </div>
          <div className="service__wrapper__content">
            <h5 className="service__wrapper__content__subtitle">
              FACILITIES &amp; MORE
            </h5>

            <h1 className="service__wrapper__content__title">All Services</h1>

            <p className="service__wrapper__content__description">
              Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui
              condimentum imperdiet. Ut at libero nec ligula fringilla dictum
              sit amet id dui. Integer gravida dolor elit, sit amet vestibulum
              mi elementum eget.
            </p>

            <div className="service__wrapper__content__btn">
              <a href="#" className="bg-primary" role="button">
                REQUEST NOW
              </a>
              <div className="">
                <a href="#" className="bg-white text-gray-900" role="button">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
          <div className="service__wrapper__last-item">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
