import Link from "next/link";
import React from "react";
import cartData from "@/app/cartData.json";
import Image from "next/image";
import StarRating from "../../rating/Rating";
import { SlArrowDown } from "react-icons/sl";
import ComparisonTable from "./ComparisonTable";

const MainComparison: React.FC = () => {
  return (
    <div className="max-w-3xl lg:max-w-7xl mx-auto">
      {/* comparison header */}
      <div className="flex items-center md:items-start gap-4 lg:gap-16 flex-col lg:flex-row py-8">
        {/* First part: 1/3 width */}
        <div className="lg:basis-1/5 w-full text-center md:text-start">
          <h3 className="capitalize text-[18px] md:text-[28px] font-medium">
            go to product page for more products
          </h3>
          <Link href={"/shop"}>
            <button className="cursor-pointer text-[#727272] text-[14px] lg:text-xl lg:font-medium underline">
              View More
            </button>
          </Link>
        </div>

        {/* Second part: 2/3 width */}
        <div className="lg:basis-4/5 w-full">
          <div className="flex items-center lg:items-start gap-4 lg:gap-16 flex-col-reverse md:flex-row">
            <div className="flex gap-4 lg:gap-16 items-center flex-wrap">
              {cartData.map((data) => (
                <div key={data.id} className="md:w-[280px] w-[170px] outline-0">
                  <figure>
                    <Image
                      src={data.img}
                      width={400}
                      height={117}
                      alt="Shoes"
                      className="rounded-lg h-44"
                    />
                  </figure>
                  <div className="md:space-y-1.5 space-y-0.5 mt-1 md:mt-2">
                    <h2 className="font-medium text-lg md:text-2xl">
                      {data.title}
                    </h2>
                    <p className="font-medium md:text-[18px]">
                      Rs. {Number(data.price).toLocaleString()}.000
                    </p>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <p className="lg:font-medium text-[13px] md:text-[18px]">
                        {data.rating}
                      </p>
                      <StarRating rating={data?.rating} />
                      <p className="px-[.5px] py-3 bg-[#bebebe]"></p>
                      <p className="text-[10px] md:text-sm text-[#9f9f9f]">
                        {data.reviewCount} Review
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:mt-10 md:mb-16 my-0 text-center md:text-start">
              <h2 className="text-[17px] lg:text-[24px] font-semibold capitalize">
                Add a product
              </h2>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="md:font-semibold text-[12px] md:text-[16px] text-white bg-[#d1a054] flex gap-8 md:gap-1 lg:gap-16 items-center lg:py-2 py-2 md:py-1 lg:px-8 px-4 md:px-2 rounded-lg cursor-pointer"
                >
                  Choose a Product{" "}
                  <SlArrowDown className="text-[14px] md:text-[20px] lg:text-[24px]" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 max-w-60 p-2 shadow-sm"
                >
                  <li>No other product in cart to show</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComparisonTable data={cartData} />
    </div>
  );
};

export default MainComparison;
