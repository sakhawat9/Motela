import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleRoom from "./components/SingleRoom/SingleRoom";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route index path="/single-room" element={<SingleRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
