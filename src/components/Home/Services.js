/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const data = [
  {
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649321559/image-4_xnqvvr.jpg",
    subtitle: "ROOM CLEANING",
    price: "150",
    buttonText: "MORE INFO",
    className: "bg-white",
    list: [
      "Suspendisse nec tincidunt",
      "Vestibulum sit amet nibh",
      "Proin id eros dapibus, dict",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649321559/image-3_eas2qd.jpg",
    subtitle: "FUL LAUNDRY",
    price: "180",
    buttonText: "REQUEST",
    className: "bg-gray-700 text-white",
    list: [
      "Suspendisse nec tincidunt",
      "Vestibulum sit amet nibh",
      "Proin id eros dapibus, dict",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649321559/image-2_kgbxrk.jpg",
    subtitle: "MEALS INCLUDED",
    price: "165 ",
    buttonText: "SEE MENU",
    className: "bg-white",
    list: [
      "Suspendisse nec tincidunt",
      "Vestibulum sit amet nibh",
      "Proin id eros dapibus, dict",
    ],
  },
];

const Services = () => {
  return (
    <>
      <div className="">
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

                <h1 className="service__wrapper__content__title">
                  All Services
                </h1>

                <p className="service__wrapper__content__description">
                  Quisque vitae posuere libero. Phasellus feugiat erat sit amet
                  dui condimentum imperdiet. Ut at libero nec ligula fringilla
                  dictum sit amet id dui. Integer gravida dolor elit, sit amet
                  vestibulum mi elementum eget.
                </p>

                <div className="service__wrapper__content__btn">
                  <a href="#" className="bg-primary" role="button">
                    REQUEST NOW
                  </a>
                  <div className="">
                    <a
                      href="#"
                      className="bg-white text-gray-900"
                      role="button"
                    >
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
        <div className="">
          <div className="serves-card ">
            <div className="container">
              <div className="serves-card__wrapper">
                {data.map((data) => (
                  <div
                    key={data.index}
                    className={`serves-card__wrapper__area ${data.className}`}
                  >
                    <div className="">
                      <img
                        width="741"
                        height="532"
                        src={data.image}
                        className="mb-5"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="serves-card__content">
                      <h5 className="serves-card__content__subtitle">
                        {data.subtitle}
                      </h5>

                      <h1 className="serves-card__content__title">
                        {data.price}
                        <span style={{ fontSize: "30px" }}>$ </span>
                        <span style={{ fontSize: "14px" }}> / month</span>
                      </h1>

                      <ul>
                        {data.list.map((li) => (
                          <li>
                            <AiOutlineCheck />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="serves-card__content__btn">
                      <a href="#">{data.buttonText}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-serves">
        <div className="container">
          <div className="food-serves__wrapper">
            <div className="food-serves__wrapper__area">
              <h5 className="food-serves__wrapper__area__subtitle">01</h5>
              <p className="food-serves__wrapper__area__title">
                SPA &amp; MASSAGES
              </p>
              <p className="food-serves__wrapper__area__details">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>
              <h5 className="food-serves__wrapper__area__subtitle">02</h5>
              <p className="food-serves__wrapper__area__title">ROOM SERVICE</p>
              <p className="food-serves__wrapper__area__details">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>
            </div>
            <div className="food-serves__wrapper__area">
              <h5 className="food-serves__wrapper__area__subtitle">03</h5>
              <p className="food-serves__wrapper__area__title">
                IRONING &amp; LAUNDRY
              </p>
              <p className="food-serves__wrapper__area__details">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>
              <h5 className="food-serves__wrapper__area__subtitle">04</h5>
              <p className="food-serves__wrapper__area__title">CLEANING ROOM</p>
              <p className="food-serves__wrapper__area__details">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="pr-16 pb-5 relative col-span-12 md:col-span-6">
                <img
                  style={{ height: "300px", width: "100%" }}
                  src="https://res.cloudinary.com/academist/image/upload/v1649323144/post-04_apuvan.jpg"
                  alt="welcome images"
                />
                <div className="absolute bottom-0 p-3 bg-white right-0">
                  <div
                    className="bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://res.cloudinary.com/academist/image/upload/v1649425658/bg10_yw3vky.jpg")',
                      backgroundPosition: "top center",
                    }}
                  >
                    <div className="py-8 px-14 bg-primary-500 bg-opacity-60">
                      <h3
                        className="font-semibold"
                        style={{ fontSize: "80px" }}
                      >
                        24
                      </h3>
                      <span className="block text-center">Years of</span>
                      <span className="block text-center">Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
