import React from "react";
import Layout from "../../common/Layout";
import AllRooms from "./AllRooms";
import Around from "./Around";
import Hero from "./Hero";
import HotelNews from "./HotelNews";
import Subscribe from "./Subscribe";
import Services from "./Services";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <AllRooms />
      <Services />
      <Around />
      <HotelNews />
      <Subscribe />
    </Layout>
  );
};

export default Home;
