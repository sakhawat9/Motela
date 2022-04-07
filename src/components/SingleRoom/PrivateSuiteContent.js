/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const data = [
  {
    img: "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/room-7.jpg",
  },
  {
    img: "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/room-4.jpg",
  },
  {
    img: "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/room-5.jpg",
  },
];

const carouselProperties = {
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const PrivateSuiteContent = () => {
  return (
    <>
      <div className="carousel">
        <Slider {...carouselProperties}>
          {data.map((item, index) => (
            <img
            key={index}
              className="privateSuiteContent__carousel-image"
              src={item.img}
              alt="image"
            />
          ))}
        </Slider>
      </div>
      <div className="md:flex mt-12 justify-around text-center">
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/templates/icon-user-grey.svg"
          />
          <p className="text-gray-500 text-sm font-light mt-3">1 GUESTS</p>
        </div>
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/templates/icon-plan-grey.svg"
          />
          <p className="text-gray-500 text-sm font-light mt-3">23 ft</p>
        </div>
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/templates/icon-bed-grey.svg"
          />
          <p className="text-gray-500 text-sm font-light mt-3">
            34 $ / PER NIGHT
          </p>
        </div>
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/templates/icon-calendar-grey.svg"
          />
          <div className="flex gap-2 justify-center mt-3">
            <p className="text-gray-500 text-sm font-light ">WEEK PRICE</p>
            <img
              alt=""
              className="nd_booking_margin_left_5"
              width="12"
              src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/templates/icon-info-grey.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateSuiteContent;
