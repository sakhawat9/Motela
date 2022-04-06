import React from "react";
import Layout from "../../commone/Layout";
import AllRooms from "./AllRooms";
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
      <HotelNews/>
      <Subscribe/>
      <Services />
    </Layout>
  );
};

export default Home;
