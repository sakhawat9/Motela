import React from "react";
import Layout from "../../commone/Layout";
import AllRooms from "./AllRooms";
import Hero from "./Hero";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <AllRooms />
    </Layout>
  );
};

export default Home;
