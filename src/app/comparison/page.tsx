import React from "react";
import Banner from "../components/comparison/banner/Banner";
import MainComparison from "../components/comparison/mainComparison/MainComparison";
import Support from "../components/shop/support/Support";

const page = () => {
  return (
    <div>
      <Banner />
      <MainComparison />
      <Support />
    </div>
  );
};

export default page;
