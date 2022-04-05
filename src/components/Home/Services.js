/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const data = [
  {
    image:
      "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/12/image-4.jpg",
    subtitle: "ROOM CLEANING",
    price: "150",
    list: [
      "Suspendisse nec tincidunt",
      "Vestibulum sit amet nibh",
      "Proin id eros dapibus, dict",
    ],
  },
  {
    image:
      "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/12/image-3.jpg",
    subtitle: "FUL LAUNDRY",
    price: "180",
    list: [
      "Suspendisse nec tincidunt",
      "Vestibulum sit amet nibh",
      "Proin id eros dapibus, dict",
    ],
  },
  {
    image:
      "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/12/image-2.jpg",
    subtitle: "MEALS INCLUDED",
    price: "165 ",
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
                  <div className="serves-card__wrapper__area">
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
                      <a href="#">MORE INFO</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <div className="">
              <h5 className="">01</h5>{" "}
            </div>

            <div className="">
              <p className="">SPA &amp; MASSAGES</p>
            </div>
            <div className="">
              <p className="">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>{" "}
            </div>

            <div className="">
              <h5 className="">02</h5>{" "}
            </div>

            <div className="">
              <p className="">ROOM SERVICE</p>
            </div>

            <div className="">
              <p className="">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>{" "}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="">
              <h5 className="">03</h5>{" "}
            </div>

            <div className="">
              <p className="">IRONING &amp; LAUNDRY</p>{" "}
            </div>
            <div className="">
              <p className="">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,
              </p>
            </div>

            <div className="">
              <h5 className="">04</h5>{" "}
            </div>
            <div className="">
              <p className="">CLEANING ROOM</p>
            </div>

            <div className="">
              <p className="">
                Etiam diam arcu, semper at interdum id, ultricies quis ipsum.
                Duis laoreet ante feugiat,{" "}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="">
              <h5 className="">MEALS INCLUDED</h5>
            </div>
            <div className="">
              <div className="">24</div>
              <div className="">SEATS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
