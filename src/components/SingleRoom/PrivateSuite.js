import React from "react";
import { AiFillStar } from "react-icons/ai";

const PrivateSuite = () => {
  return (
    <div className="private-suite">
      <div className="container">
        <h1 className="private-suite__title">Private Suite</h1>
        <div className="private-suite__ratting">
          <p>CITY HOTEL</p>
          <ul>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivateSuite;
