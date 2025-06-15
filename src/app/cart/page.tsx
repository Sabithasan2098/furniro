import React from "react";
import CartBanner from "../components/cart/cartBanner/CartBanner";
import CartData from "../components/cart/cartData/CartData";
import Support from "../components/shop/support/Support";

const page = () => {
  return (
    <div>
      <CartBanner />
      <CartData />
      <Support />
    </div>
  );
};

export default page;
