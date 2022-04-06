import React from "react";
import Layout from "../../common/Layout";
import PrivateSuite from "./PrivateSuite";
import SingleRoomBanner from "./SingleRoomBanner";

const SingleRoom = () => {
  return (
    <Layout>
        <SingleRoomBanner />
        <PrivateSuite />
    </Layout>
  );
};

export default SingleRoom;
