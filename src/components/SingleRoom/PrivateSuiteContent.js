/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const data = [
  {
    img: "https://res.cloudinary.com/academist/image/upload/v1649326925/room-7_a3xg3x.jpg",
  },
  {
    img: "https://res.cloudinary.com/academist/image/upload/v1649326971/room-4_lwlykj.jpg",
  },
  {
    img: "https://res.cloudinary.com/academist/image/upload/v1649326971/room-5_q6gsr4.jpg",
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
      <div className="md:flex my-12 justify-around text-center">
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="https://res.cloudinary.com/academist/image/upload/v1649329629/icon-user-grey_jjjecr.svg"
          />
          <p className="text-gray-500 text-sm font-light mt-3">1 GUESTS</p>
        </div>
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="https://res.cloudinary.com/academist/image/upload/v1649329628/icon-plan-grey_cedsbg.svg"
          />
          <p className="text-gray-500 text-sm font-light mt-3">23 ft</p>
        </div>
        <div className="items-center mt-10 md:mt-0">
          <img
            alt=""
            className="mx-auto"
            width="40"
            src="https://res.cloudinary.com/academist/image/upload/v1649329628/icon-bed-grey_dlvmjt.svg"
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
              src="https://res.cloudinary.com/academist/image/upload/v1649329628/icon-calendar-grey_pl6pvj.svg"
            />
          </div>
        </div>
      </div>
      <div className="py-14 border-y border-gray-200">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam
          interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim,
          malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor,
          risus risus dictum risus, sed rhoncus orci urna dignissim leo. Cras id
          nunc nulla. Aliquam a tortor fermentum, finibus elit ac, dictum purus.
          Nulla mollis ex interdum commodo luctus. In hac habitasse platea
          dictumst. Quisque vel rutrum ipsum. Praesent at imperdiet diam. Ut vel
          vulputate massa. Duis condimentum tincidunt tristique. Donec
          sollicitudin efficitur venenatis. Integer ex lectus, lobortis nec
          cursus ac, suscipit ut magna.
        </p>
      </div>
      <div className="py-10 border-b border-gray-200">
        <h2 className="capitalize text-4xl font-medium mb-5">room Services</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 py-2">
            <div className="flex gap-3 items-center">
              <img
                alt=""
                className=""
                width="25"
                src="https://res.cloudinary.com/academist/image/upload/v1649329535/service-4_ll1op1.png"
              />
              <p className="">Hairdryer</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 py-2 gap-2">
            <div className="flex gap-3 items-center">
              <img
                alt=""
                className=""
                width="25"
                src="https://res.cloudinary.com/academist/image/upload/v1649329328/service-18_iab2ws.png"
              />
              <p className="">Pool</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 py-2 gap-2">
            <div className="flex gap-3 items-center">
              <img
                alt=""
                className=""
                width="25"
                src="https://res.cloudinary.com/academist/image/upload/v1649329327/service-3_i0h33o.png"
              />
              <p className="">Elevator</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 py-2 gap-2">
            <div className="flex gap-3 items-center">
              <img
                alt=""
                className=""
                width="25"
                src="https://res.cloudinary.com/academist/image/upload/v1649329328/service-6_jbf3ho.png"
              />
              <p className="">Bunk Bed</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 py-2 gap-2">
            <div className="flex gap-3 items-center">
              <img
                alt=""
                className=""
                width="25"
                src="https://res.cloudinary.com/academist/image/upload/v1649329328/service-11_aabmev.png"
              />
              <p className="">Drinks</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="mb-10">Around The Hotel</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 gap-4 relative">
            <img
              src="https://res.cloudinary.com/academist/image/upload/v1649329328/post-9_srauat.jpg"
              alt=""
            />
            <a className="absolute bottom-6 text-white px-8 mx-auto" href="#">
              <h4>Wellness Spa</h4>
            </a>
          </div>
          <div className="col-span-12 md:col-span-4 gap-4 relative">
            <img
              src="https://res.cloudinary.com/academist/image/upload/v1649329328/post-8_uznvzv.jpg"
              alt=""
            />
            <a className="absolute bottom-6 text-white px-8 mx-auto" href="#">
              <h4>Coffe Corner</h4>
            </a>
          </div>
          <div className="col-span-12 md:col-span-4 gap-4 relative">
            <img
              src="https://res.cloudinary.com/academist/image/upload/v1649329328/post-7_gg0tg9.jpg"
              alt=""
            />
            <a className="absolute bottom-6 text-white px-8 mx-auto" href="#">
              <h4>Terrace Bar</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateSuiteContent;
