import React from "react";
import image from "../../../../../public/asset/shop/delivery.png";
import image1 from "../../../../../public/asset/shop/help.png";
import image2 from "../../../../../public/asset/shop/trophy.png";
import image4 from "../../../../../public/asset/shop/warrenty.png";
import Image from "next/image";

const Support: React.FC = () => {
  return (
    <div className="md:flex  items-center bg-[#faf3e9] py-24  md:mt-16 mt-8 hidden">
      <div className="max-w-7xl mx-auto">
        <div className=" grid grid-cols-4 md:flex  gap-1 md:gap-10 lg:gap-6 ">
          <div className="flex gap-3 flex-col md:flex-row  items-center lg:pr-14">
            <Image
              src={image2}
              height={45}
              width={45}
              alt="support_image"
              className="lg:h-12 lg:w-12 md:h-7 md:w-6"
            />
            <div>
              <h3 className="text-[#221f18] text-center md:text-start md:text-[18px] lg:text-[25px] font-normal md:font-medium lg:font-semibold">
                High Quality
              </h3>
              <p className="text-center md:text-start">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  items-center ">
            <Image
              src={image4}
              height={45}
              width={45}
              alt="support_image"
              className="lg:h-12 lg:w-12 md:h-7 md:w-6"
            />
            <div>
              <h3 className="text-[#221f18] text-center md:text-start md:text-[18px] lg:text-[25px] font-normal md:font-medium lg:font-semibold">
                Warranty Protection
              </h3>
              <p className="text-center md:text-start">Over 2 years</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  items-center lg:pl-14">
            <Image
              src={image}
              height={45}
              width={45}
              alt="support_image"
              className="lg:h-12 lg:w-12 md:h-7 md:w-6"
            />
            <div>
              <h3 className="text-[#221f18] text-center md:text-start md:text-[18px] lg:text-[25px] font-normal md:font-medium lg:font-semibold">
                Free Shipping
              </h3>
              <p className="text-center md:text-start">Order over 150 $</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  items-center lg:pl-14">
            <Image
              src={image1}
              height={45}
              width={45}
              alt="support_image"
              className="lg:h-12 lg:w-12 md:h-7 md:w-6"
            />
            <div>
              <h3 className="text-[#221f18] text-center md:text-start md:text-[18px] lg:text-[25px] font-normal md:font-medium lg:font-semibold">
                24 / 7 Support
              </h3>
              <p className="text-center md:text-start">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
