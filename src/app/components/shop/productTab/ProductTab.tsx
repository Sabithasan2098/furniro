"use client";
import React, { useState } from "react";
import productTabData from "@/app/productReviewData.json";
import Image from "next/image";

type ProductTabProps = {
  id: string;
};

const ProductTab = ({ id }: ProductTabProps) => {
  const productTab = productTabData.find((p) => p.productId === id);

  const defaultTab = productTab?.tabs[0]?.title || "";
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!productTab) return <p>No tab data found for this product.</p>;

  return (
    <div className="pb-10">
      <div className="pt-10 border-t-[1px] border-gray-300 min-h-[490px]">
        {/* Tabs */}
        <div className="flex gap-6 pb-6 items-center justify-center">
          {productTab.tabs.map((tab) => (
            <button
              key={tab.title}
              className={`text-[14px] md:text-[18px] lg:text-[24px] font-medium transition-all ${
                activeTab === tab.title
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
              {tab.title === "Reviews" && ` [${tab.reviews?.length || 0}]`}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-700 mb-4">
          {(() => {
            const active = productTab.tabs.find(
              (tab) => tab.title === activeTab
            );
            if (!active) return null;

            if (active.title === "Reviews") {
              return (
                <ul className="space-y-3">
                  {active.reviews?.map((review) => (
                    <li
                      key={review.reviewId}
                      className="mb-4 max-w-[320px] md:max-w-3xl lg:max-w-5xl mx-auto"
                    >
                      <p className="font-semibold">{review.user}</p>
                      <p>Rating: {"⭐".repeat(review.rating)}</p>
                      <p>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              );
            } else {
              return (
                <div>
                  {/* Main HTML content */}
                  <div
                    dangerouslySetInnerHTML={{ __html: active.content || "" }}
                    className="mb-4 max-w-[320px] md:max-w-3xl lg:max-w-5xl mx-auto"
                  />

                  {/* Show content images if exist */}
                  {active.img && active.img.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 px-2 md:px-5 lg:px-0">
                      {active.img.map((img, index) => (
                        <Image
                          width={600}
                          height={30}
                          key={index}
                          src={img}
                          alt={`description image ${index + 1}`}
                          className="h-[300px]  rounded-md shadow mt-2 "
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
