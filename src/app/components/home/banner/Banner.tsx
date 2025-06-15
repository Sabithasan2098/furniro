import Image from "next/image";
import React from "react";
import banner from "../../../../../public/asset/home/banner.png";

const Banner: React.FC = () => {
  return (
    <div>
      <Image
        src={banner}
        alt="banner_image"
        width={1950}
        className="relative"
      />
      <div className="hidden lg:flex">
        <div className="bg-[#fff3e3] rounded-md w-[643] h-[443] p-12 absolute bottom-1/3 right-72 ">
          <h4 className="font-semibold text-[16px]">New Arrival</h4>
          <h1 className="text-[#b98e2f] text-[52px] font-bold pr-28">
            Discover Our New Collection
          </h1>
          <p className="font-medium text-[18px] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="uppercase text-white bg-[#b98e2f] px-14 py-6 font-semibold mt-10">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
