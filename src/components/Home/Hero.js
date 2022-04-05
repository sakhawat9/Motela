import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__content__top">
          <p>BOOK YOUR ROOM NOW !!</p>
          <h2>Reserve</h2>
          <h2>Your Holiday</h2>
        </div>
        <div className='hero__content__bottom'>
          <div className="hero__content__bottom__search">
            <div>
              <p>CHECK-IN</p>
              <input type="text" value="5 Apr"></input>
            </div>
            <div>
              <p>CHECK-OUT</p>
              <input type="text" value="5 Apr"></input>
            </div>
            <div>
              <p>GUESTS</p>
              <input type="number" value="2"></input>
            </div>
            <div className='mt-8'>
             
              <input type="submit" value="CHECK AVAILABILITY"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
