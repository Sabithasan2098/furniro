import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TProduct = {
  id: string;
  img: string[];
  longDesc: string;
  rating: number;
  reviewCount: number;
  sizes: string[];
  colors: string[];
  badge: string;
  title: string;
  desc: string;
  currentPrice: string;
  beforePrice: string;
  sku: string;
  category: string;
  tags: string[];
};

type TProductProps = {
  TProduct: TProduct;
};
const Card: React.FC<TProductProps> = ({ TProduct }) => {
  return (
    <div className="relative w-40 md:w-72  overflow-hidden shadow-lg group bg-white">
      <div>
        <Link href={`/shop/${TProduct.id}`} className="block lg:hidden">
          <Image
            src={TProduct.img[1]}
            alt="product_image"
            width={285}
            height={301}
            className="w-full h-40 md:h-80 object-cover group-hover:brightness-50 transition duration-300 relative"
          />
        </Link>
        <Image
          src={TProduct.img[1]}
          alt="product_image"
          width={285}
          height={301}
          className="w-full h-40 md:h-80 object-cover group-hover:brightness-50 transition duration-300 relative hidden lg:block"
        />
        <div className="absolute top-2 right-4 ">
          {TProduct.badge === "New" && (
            <p className="bg-[#2ac1ab] text-white px-[6px] py-[10] rounded-full text-sm">
              {TProduct.badge}
            </p>
          )}

          {!isNaN(Number(TProduct.badge)) &&
            TProduct.badge !== "New" &&
            TProduct.badge !== "" && (
              <p className="bg-[#ea6d71] text-white px-1 py-[10px] rounded-full text-sm">
                -{TProduct.badge}%
              </p>
            )}
        </div>
      </div>
      <div className="absolute inset-0 hidden lg:flex  flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
        <Link
          href={`/shop/${TProduct.id}`}
          className="bg-white text-yellow-600 font-semibold px-10 py-2 shadow cursor-pointer"
        >
          More Info
        </Link>

        <div className="flex justify-center items-center gap-6 text-white text-sm mt-6">
          <span className="cursor-pointer">🔗 Share</span>
          <span className="cursor-pointer">🔁 Compare</span>
          <span className="cursor-pointer">❤️ Like</span>
        </div>
      </div>
      <div className="text-start pl-3 pt-1 md:pt-3 pb-0 md:pb-4">
        <h3 className="text-[18px] md:text-[24px] font-semibold text-[#3a3a3a]">
          {TProduct.title}
        </h3>
        <h5 className="text-[#898989] text-[10px] md:text-[16px] py-1">
          {TProduct.desc}
        </h5>
        <div className="flex justify-between items-center pb-3 md:pb-4">
          <p className="text-[10px] md:text-[20px] font-semibold text-[#3a3a3a]">
            Rp{TProduct.currentPrice}
          </p>
          {TProduct.beforePrice !== "" ? (
            <p className="pr-3 text-[8px] md:text-[14px] text-[#b0b0b0] line-through">
              Rp{TProduct.beforePrice}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
