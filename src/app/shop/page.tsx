import React from "react";
import Banner from "../components/shop/banner/Banner";
import Image from "next/image";
import image from "../../../public/asset/shop/Vector-1.png";
import image1 from "../../../public/asset/shop/Vector-2.png";
import image2 from "../../../public/asset/shop/Vector.png";
import ShopCards from "../components/shop/shopCards/ShopCards";
import Support from "../components/shop/support/Support";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f9f0e7] px-4 md:px-32 py-3 md:py-6">
        <div className="md:flex flex-col md:flex-row gap-8 items-center hidden ">
          <div className="flex gap-8 items-center">
            <div className="flex gap-3 items-center ">
              <Image height={20} width={20} src={image1} alt="shop_bar_image" />
              <h4 className="text-[20px]">Filter</h4>
            </div>
            <Image height={20} width={20} src={image} alt="shop_bar_image" />
            <Image height={20} width={20} src={image2} alt="shop_bar_image" />
          </div>
          <div className="bg-[#908381] px-[1px] py-4 hidden md:flex"></div>
          <h4 className="hidden lg:block">Showing 1–16 of 32 results</h4>
        </div>
        <div className="flex gap-9 items-center pt-6 md:pt-0">
          <div className="flex items-center md:gap-4 gap-2">
            <h4 className="text-lg md:text-[20px]">Show</h4>
            <input
              className="w-7 md:w-12  p-1 md:p-3 bg-white text-black placeholder-[#9c9c9c] outline-none"
              placeholder="16"
              type="text"
            />
          </div>
          <div className="flex items-center md:gap-4 gap-2">
            <h4 className="text-lg md:text-[20px]">Short by</h4>
            <input
              className="w-16 md:w-28 p-1 md:p-3 bg-white text-black placeholder-[#9c9c9c] outline-none"
              placeholder="Default"
              type="text"
            />
          </div>
        </div>
      </div>
      <ShopCards />
      <Support />
    </div>
  );
};

export default page;
