"use client";
import React, { useState } from "react";
import cardData from "../../../ourProducts.json";
import Card, { TProduct } from "../../cards/Card";

const ShopCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const buttons = ["1", "2", "3", "Next"];
  return (
    <div className="flex flex-col items-center justify-center mt-6 md:mt-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
        {(cardData as TProduct[]).map((data) => (
          <Card key={data.id} TProduct={data}></Card>
        ))}
      </div>
      <div className="flex gap-2 md:gap-4 items-center mt-12 mb-6 md:mb-0">
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 md:px-6 py-2 md:py-4 rounded-md text-center text-black cursor-pointer transition-all duration-200
            ${
              activeIndex === index ? "bg-[#d1a054] text-white" : "bg-[#faf3e9]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
