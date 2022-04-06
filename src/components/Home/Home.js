import React from "react";
import Layout from "../../common/Layout";
import AllRooms from "./AllRooms";
import Hero from "./Hero";
import Services from "./Services";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <AllRooms />
      <Services />
    </Layout>
  );
};

export default Home;
