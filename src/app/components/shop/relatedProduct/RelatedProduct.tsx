import React from "react";
import Card, { TProduct } from "../../cards/Card";
import cardData from "@/app/ourProducts.json";
import Link from "next/link";
type TCategory = {
  category: string;
};

const RelatedProduct = ({ category }: TCategory) => {
  const data = cardData.filter((p) => p.category === category);
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-[1.5px] border-gray-300 py-10 md:py-20">
        <h2 className="text-center text-[28px] lg:text-[36px] font-medium pb-5 md:pb-10 lg-pb-14">
          Related Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {(data as TProduct[])?.map((data) => {
            return <Card key={data.id} TProduct={data}></Card>;
          })}
        </div>
        <div className="text-center">
          <Link href={"/shop"}>
            <button className="text-[#b98e2f] font-semibold text-[16px] border border-[#b98e2f] px-20 py-3 mt-10 cursor-pointer hover:bg-[#b98e2f] hover:text-white transition duration-300">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
