import React from "react";
import { AiFillStar } from "react-icons/ai";
import PrivateSuiteContent from "./PrivateSuiteContent";
import PrivateSuiteSidebar from "./PrivateSuiteSidebar";

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
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <PrivateSuiteContent />
          </div>
          <div className="col-span-12 md:col-span-4">
            <PrivateSuiteSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSuite;
