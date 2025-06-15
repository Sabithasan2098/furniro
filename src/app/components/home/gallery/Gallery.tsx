import React from "react";
import image1 from "../../../../../public/asset/home/forniro_furniture/Rectangle-36.png";
import image2 from "../../../../../public/asset/home/forniro_furniture/Rectangle-37.png";
import image3 from "../../../../../public/asset/home/forniro_furniture/Rectangle-38.png";
import image4 from "../../../../../public/asset/home/forniro_furniture/Rectangle-39.png";
import image5 from "../../../../../public/asset/home/forniro_furniture/Rectangle-40.png";
import image6 from "../../../../../public/asset/home/forniro_furniture/Rectangle-41.png";
import image8 from "../../../../../public/asset/home/forniro_furniture/Rectangle-43.png";
import image9 from "../../../../../public/asset/home/forniro_furniture/Rectangle-44.png";
import image10 from "../../../../../public/asset/home/forniro_furniture/Rectangle-45.png";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8 md:my-14">
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-[20px] md:font-semibold text-[#616161]">
          Share your setup with
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#3a3a3a]">
          #FuniroFurniture
        </h2>
      </div>
      <div className="px-1 md:px-0">
        <div className="flex flex-col md:flex-row  gap-2 items-center justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image src={image1} alt="gallery image" />
              <Image
                src={image3}
                alt="gallery image"
                className="mt-20 md:w-full w-[280px]"
              />
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center gap-2">
              <Image src={image2} alt="gallery image" />
              <Image
                src={image4}
                alt="gallery image"
                className="md:mb-20 md:w-full w-[280px]"
              />
            </div>
          </div>
          <Image src={image5} alt="gallery image" />
          <div className="flex flex-col gap-2">
            <div className="flex md:flex-row flex-col items-center justify-center gap-2">
              <Image
                src={image8}
                alt="gallery image"
                className="md:mt-[84px]"
              />
              <Image src={image10} alt="gallery image" />
            </div>
            <div className="flex md:flex-row flex-col items-center justify-start gap-2">
              <Image src={image6} alt="gallery image" className="h-[280px]" />
              <Image
                src={image9}
                alt="gallery image"
                className="md:mb-[84px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
