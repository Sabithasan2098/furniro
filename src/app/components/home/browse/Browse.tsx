import React from "react";
import image1 from "../../../../../public/asset/home/browese/dining.png";
import image2 from "../../../../../public/asset/home/browese/image 100.png";
import image3 from "../../../../../public/asset/home/browese/image 101.png";
import Image from "next/image";

const Browse: React.FC = () => {
  return (
    <div className="text-center max-w-[1200px] mx-auto">
      <div className="my-14">
        <h1 className="text-[32px] md:text[40px] font-bold text-[#333333]">
          Browse The Range
        </h1>
        <p className="text-[20px] text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-0 gap-6">
        <div className="flex gap-1 md:gap-5 flex-col items-center">
          <Image
            className="rounded-xl"
            src={image1}
            alt="browse_image"
            height={480}
            width={381}
          ></Image>
          <h3 className="text-[#333333] text-[20px] md:text-[24px] font-semibold">
            Dining
          </h3>
        </div>
        <div className="flex gap-1 md:gap-5 flex-col items-center">
          <Image
            className="rounded-xl"
            src={image2}
            alt="browse_image"
            height={480}
            width={381}
          ></Image>
          <h3 className="text-[#333333] text-[20px] md:text-[24px] font-semibold">
            Living
          </h3>
        </div>
        <div className="flex gap-1  flex-col items-center">
          <Image
            className="rounded-xl"
            src={image3}
            alt="browse_image"
            height={480}
            width={381}
          ></Image>
          <h3 className="text-[#333333] text-[20px] md:text-[24px] font-semibold">
            Bedroom
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Browse;
