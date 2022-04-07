/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const data = [
  {
    roomTitle: "Private Suite",
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649321226/room-1-1024x664_m3nekf.jpg",
    stagingPrice: "34",
    guests: "1",
    size: "23",
    link: "#",
  },
  {
    roomTitle: "Deluxe Room",
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649321228/room-4-1024x664_wadjwu.jpg",
    stagingPrice: "68",
    guests: "5",
    size: "56",
    link: "#",
  },
  {
    roomTitle: "Family Room",
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649321228/room-6-1024x664_vg1edw.jpg",
    stagingPrice: "87",
    guests: "5",
    size: "67",
    link: "#",
  },
];

const AllRooms = () => {
  return (
    <div className="all-rooms">
      <div className="container">
        <div className="all-rooms__top">
          <div className="all-rooms__top__first-item">
            <h5 className="all-rooms__top__first-item__subtitle">
              ACCOMMODATION
            </h5>
            <h1 className="all-rooms__top__first-item__title">All Rooms</h1>
          </div>
          <div className="all-rooms__top__second-item">
            <p>
              Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui
              condimentum imperdiet. Ut at
              <u>libero nec ligula fringilla dictum</u> sit amet id dui. Integer
              gravida dolor elit, sit amet vestibulum mi elementum eget.
            </p>
          </div>
          <div className="all-rooms__top__third-item">
            <a href="#" role="button">
              VIEW ALL
            </a>
          </div>
        </div>
        <div className="all-rooms__bottom">
          <div className="all-rooms__bottom__wrapper">
            {data.map((data) => (
              <div className="all-rooms__bottom__wrapper__item ">
                <img
                  alt=""
                  className="all-rooms__bottom__wrapper__item__image"
                  src={data.image}
                />
                <div className="all-rooms__bottom__wrapper__item__stating-price">
                  <a href="#">FROM {data.stagingPrice} $</a>
                </div>
                <div className="all-rooms__bottom__wrapper__item__details">
                  <h3>{data.roomTitle}</h3>

                  <div className="flex gap-4">
                    <img
                      alt=""
                      width="23"
                      src="https://res.cloudinary.com/academist/image/upload/v1649321346/icon-guests_lgxtvh.png"
                    />
                    <p>{data.guests} Guests</p>
                    <img
                      alt=""
                      width="20"
                      src="https://res.cloudinary.com/academist/image/upload/v1649321346/icon-size_uhhdwa.png"
                    />
                    <p>23 ft</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
