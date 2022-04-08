/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const PrivateSuiteSidebar = () => {
  return (
    <div>
      <h3 className="my-5 text-2xl	">Best Rooms</h3>
      <div>
        <div className="pb-5">
          <div className="flex gap-5">
            <img
              alt=""
              width="100"
              src="https://res.cloudinary.com/academist/image/upload/v1649410579/room-6-150x150_tqzvtn.jpg"
            />

            <div>
              <h4 className="text-xl">Deluxe Room</h4>
              <p className="text-sm font-light">From 86 $ per night</p>
              <div className=" mt-3">
                <a href="#" className="bg-primary py-1 px-2 text-white">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex gap-5">
            <img
              alt=""
              width="100"
              src="https://res.cloudinary.com/academist/image/upload/v1649410579/room-7-150x150_refvut.jpg"
            />

            <div>
              <h4 className="text-xl">Double Room</h4>
              <p className="text-sm font-light">From 56 $ per night</p>
              <div className=" mt-3">
                <a href="#" className="bg-primary py-1 px-2 text-white">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="my-5 text-2xl">Documents</h3>
      <div>
        <div className="flex gap-6 items-center">
          <a href="#">
            <img
              alt=""
              width="40px"
              src="https://res.cloudinary.com/academist/image/upload/v1649419047/pdf-gold_1_loux4x.svg"
            />
          </a>
          <a href="#">Conditions of Hospitality</a>
        </div>
        <br />
        <div className="flex gap-6 items-center">
          <a href="#">
            <img
              alt=""
              width="40px"
              src="https://res.cloudinary.com/academist/image/upload/v1649419048/pdf-black_rwqq82.svg"
            />
          </a>
          <a className=" " href="#">
            Fire Rules of the Hotel
          </a>
        </div>
        <br />
        <div className="flex gap-6 items-center">
          <a href="#">
            <img
              alt=""
              width="40px"
              src="https://res.cloudinary.com/academist/image/upload/v1649419047/pdf-gold_1_loux4x.svg"
            />
          </a>

          <a href="#">Seasonal Room Rates</a>
        </div>
      </div>
      <h3 className="my-5 text-2xl">Branches</h3>
      <div >
        <div >
          <div className="pb-5">
            <div className="flex gap-5">
              <img
                alt=""
                
                width="100"
                src="https://res.cloudinary.com/academist/image/upload/v1649418986/post-02-150x150_vukisb.jpg"
              />

              <div >
                <a href="#">
                  <h4 className="text-xl">City Hotel</h4>
                </a>

                <p className="text-sm font-light">London ( England )</p>

                <div >
                  <ul className="flex gap-1 mt-3">
                    <li>
                      <BsFillStarFill />
                    </li>
                    <li>
                      <BsFillStarFill />
                    </li>
                    <li>
                      <BsFillStarFill />
                    </li>
                    <li>
                      <BsFillStarFill />
                    </li>
                    <li>
                      <BsFillStarFill />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex gap-5">
              <img
                alt=""
                
                width="100"
                src="https://res.cloudinary.com/academist/image/upload/v1649418952/image-1-150x150_hemrbr.jpg"
              />
              <div >
                <a href="#">
                  <h4 className="text-xl">Sea Hotel</h4>
                </a>
                <p className="text-sm font-light">San Francisco ( U.S.A. )</p>
                <ul className="flex gap-1 mt-3">
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                  <li>
                    <BsFillStarFill />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          alt=""
          src="https://res.cloudinary.com/academist/image/upload/v1649418895/room-4-1024x664_xylaqe.jpg"
        />

        <div className="absolute p-5 text-white bottom-0">
          <a href="#">
            <h4 >Private Suite</h4>
          </a>
          <p >FROM 34 $</p>
        </div>
      </div>
    </div>
  );
};

export default PrivateSuiteSidebar;
