"use client";
import React, { useState } from "react";

const Pagination = () => {
  // pagination btn
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const buttons = ["1", "2", "3", "Next"];
  return (
    <div className="flex items-center justify-center mb-6 md:mb-0">
      <div className="flex gap-2 md:gap-4 items-center mt-2 md:mt-4">
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

export default Pagination;
