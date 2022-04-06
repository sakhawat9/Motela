import React from "react";
import Layout from "../../commone/Layout";
import AllRooms from "./AllRooms";
import Around from "./Around";
import Hero from "./Hero";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <AllRooms />
      <Around/>
    </Layout>
  );
};

export default Home;
