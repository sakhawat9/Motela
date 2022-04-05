/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const data = [
  {
    roomTitle: "Private Suite",
    image:
      "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/room-4-1024x664.jpg",
    stagingPrice: "34",
    guests: "1",
    size: "23",
    link: "#",
  },
  {
    roomTitle: "Deluxe Room",
    image:
      "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/room-6-1024x664.jpg",
    stagingPrice: "68",
    guests: "5",
    size: "56",
    link: "#",
  },
  {
    roomTitle: "Family Room",
    image:
      "http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/uploads/sites/2/2021/11/room-1-1024x664.jpg",
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
                <div className="absolute top-6 right-0">
                  <a
                    href="#"
                    className="bg-primary text-white cursor-pointer py-2 px-5 uppercase text-sm"
                    style={{ letterSpacing: "4px" }}
                  >
                    FROM {data.stagingPrice} $
                  </a>
                </div>
                <div className="absolute bottom-6 left-4 text-white">
                  <h3 className="text-white">{data.roomTitle}</h3>

                  <div className="flex gap-4">
                    <img
                      alt=""
                      width="23"
                      src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/addons/elementor/rooms/layout/../img/icon-guests.png"
                    />
                    <p>1 Guests</p>
                    <img
                      alt=""
                      width="20"
                      src="http://www.nicdarkthemes.com/themes/hotel-inn/wp/demo/inn-suites/wp-content/plugins/nd-booking/addons/elementor/rooms/layout/../img/icon-size.png"
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
