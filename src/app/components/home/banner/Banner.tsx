import Image from "next/image";
import React from "react";
import banner from "../../../../../public/asset/home/banner.png";

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner_image"
        width={1440}
        className=" lg:h-[717px]"
      />
      <div className="hidden lg:flex">
        <div className="bg-[#fff3e3] rounded-md w-[623px] h-[443px] pl-[41px] pr-[43px] pt-[62px] pb-[37px] absolute top-[153px] right-[58px] shrink-0">
          <h4 className="font-semibold text-[16px]">New Arrival</h4>
          <h1 className="text-[#b98e2f] text-[52px] font-bold mt-1 mb-[17px] shrink-0 leading-[65px]">
            Discover Our New Collection
          </h1>
          <p className="font-medium text-[18px] mb-[46px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="uppercase text-white bg-[#b98e2f] px-[72px] py-[25px] text-[16px] font-bold ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
