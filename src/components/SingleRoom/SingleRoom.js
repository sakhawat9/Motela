import React from "react";
import Layout from "../../common/Layout";
import PrivateSuite from "./PrivateSuite";
import SimilarRooms from "./SimilarRooms";
import SingleRoomBanner from "./SingleRoomBanner";

const SingleRoom = () => {
  return (
    <Layout>
        <SingleRoomBanner />
        <PrivateSuite />
        <SimilarRooms />
    </Layout>
  );
};

export default SingleRoom;
