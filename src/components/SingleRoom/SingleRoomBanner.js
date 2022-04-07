import React from "react";

const SingleRoomBanner = () => {
  return (
    <div className="single-room-banner">
      <div className="container">
        <div className="single-room-banner__height"></div>
        <div className="single-room-banner__content">
          <ul className="single-room-banner__content__list">
            <li className="border-b-2 border-white ">DESCRIPTION</li>
            <li>ROOM SERVICES</li>
            <li>AROUND THE HOTEL</li>
            <li>SIMILAR ROOMS</li>
          </ul>

          <div className="flex items-center justify-center pt-5 md:pt-0 gap-3">
            <h1 className="single-room__content__price text-center">34</h1>
            <div className="">
              <h5 className="text-sm">$</h5>
              <h3 className="text-sm">/ PER NIGHT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomBanner;
