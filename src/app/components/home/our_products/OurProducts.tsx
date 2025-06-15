import React from "react";
import productData from "@/app/ourProducts.json";
import Card, { TProduct } from "../../cards/Card";
import Link from "next/link";

const OurProducts: React.FC = () => {
  const slicedProductData = productData.slice(0, 8);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-14 max-w-[1236px] mx-auto">
        <h1 className="text-[#343434] font-bold text-[32px] md:text-[40px] text-center pb-6 md:pb-14">
          Our Products
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {(slicedProductData as TProduct[]).map((product) => (
            <Card key={product.id} TProduct={product}></Card>
          ))}
        </div>
      </div>
      <Link href={"/shop"}>
        <button className="text-[#b98e2f] font-semibold text-[16px] border border-[#b98e2f] px-20 py-3 mt-10 cursor-pointer hover:bg-[#b98e2f] hover:text-white transition duration-300">
          Show More
        </button>
      </Link>
    </div>
  );
};

export default OurProducts;
