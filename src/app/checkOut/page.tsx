import React from "react";
import CheckOut from "../components/checkOut/CheckOut";
import CheckOutBanner from "../components/checkOut/CheckOutBanner";
import Support from "../components/shop/support/Support";

const page = () => {
  return (
    <div>
      <CheckOutBanner />
      <CheckOut />
      <Support />
    </div>
  );
};

export default page;
