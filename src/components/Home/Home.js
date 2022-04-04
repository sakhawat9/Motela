import React from "react";
import Layout from "../../commone/Layout";
import Hero from "./Hero";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Welcome />
    </Layout>
  );
};

export default Home;
