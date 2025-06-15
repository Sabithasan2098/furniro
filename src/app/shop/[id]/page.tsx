"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import productData from "@/app/ourProducts.json";
import Image from "next/image";
// icons
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import ProductTab from "@/app/components/shop/productTab/ProductTab";
import RelatedProduct from "@/app/components/shop/relatedProduct/RelatedProduct";

const ProductDetail = () => {
  const params = useParams();
  const productId = params?.id as string;
  const product = productData.find((p) => p.id === productId);

  const pathName = usePathname();
  const path = pathName.replace("/", "");
  const slicedPath = path.slice(0, 4);

  // state
  const [selectedImage, setSelectedImage] = useState<string>(
    product?.img[0] as string
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  return (
    <div className="md:pt-16">
      <div className="flex items-center gap-3 bg-[#f9f0e7] py-2 md:py-6 lg:py-8 pl-8 md:pl-16 lg:pl-28">
        <Link className="text-[#b9b9b9]" href={"/"}>
          Home &gt;
        </Link>
        <Link className="text-[#b9b9b9] capitalize" href={"/shop"}>
          {slicedPath} &gt;
        </Link>
        <p className="px-[1px] py-4 bg-[#b9b9b9]"></p>
        <p className="font-medium">{product?.title}</p>
      </div>
      {/* card-details */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-20 px-6 py-12 ">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-row md:flex-col gap-4">
            {product?.img.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                width={30}
                height={30}
                className="rounded cursor-pointer border border-gray-300 md:h-[60px] md:w-[60px]"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="max-h-[385px] max-w-[385px]">
            <Image
              src={selectedImage}
              alt="Product"
              width={120}
              height={120}
              className="rounded object-cover  md:h-[400px] md:w-[400px] "
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-[28px] md:text-[42px] mb-1 md:mb-2">
            {product?.title}
          </h2>
          <p className="text-lg md:text-2xl font-medium text-[#a39e9a] mb-2 md:mb-4">
            Rs. {product?.currentPrice}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm md:text-xl text-[#ffc503]">
              {"★".repeat(Math.floor(product?.rating as number))}
            </span>
            <span className="text-[10px] md:text-[13px] text-gray-500">
              | {product?.reviewCount} Customer Review
            </span>
          </div>

          <p className="text-[10px] md:text-[13px] text-gray-700 mb-3 md:mb-6 max-w-[424px]">
            {product?.longDesc}
          </p>

          {/* Size */}
          <div className="mb-2 md:mb-4">
            <p className="text-xs md:text-base text-gray-700 mb-1">Size</p>
            <div className="flex gap-2">
              {product?.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-xs md:text-base rounded transition-colors duration-200 ${
                    selectedSize === size
                      ? "bg-[#ba8d32] text-white"
                      : " bg-[#f9f0e7] text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-3 md:mb-6">
            <p className="text-gray-700 mb-1">Color</p>
            <div className="flex gap-4">
              {product?.colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-500 rounded-lg px-4 lg::px-6 py-[6px] md:py-2 gap-2 ">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-sm md:text-xl cursor-pointer"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-sm md:text-xl cursor-pointer "
              >
                +
              </button>
            </div>

            <button className=" border border-black text-sm lg:text-[20px] px-4 lg:px-8 py-2 rounded-lg cursor-pointer shadow hover:bg-[#a0741d] hover:text-white transition-colors duration-200">
              Add To Cart
            </button>
            <button className="border border-black text-sm lg:text-[20px] px-4 lg:px-8 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              + Compare
            </button>
          </div>

          {/* Meta Info */}

          <div className="text-sm text-gray-600 space-y-2 border-t-[1px] border-gray-300 pt-8">
            <div className="flex items-center gap-4">
              <p className="pr-[31px]">SKU</p> : <p>{product?.sku}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="pr-0">Category</p> : <p>{product?.category}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="pr-[29px]">Tags</p> :{" "}
              <p>{product?.tags.join(", ")}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="pr-[21px]">Share</p>:{" "}
              <div className="flex items-center  gap-2">
                <button className="text-xl text-black cursor-pointer">
                  <FaFacebook />
                </button>
                <button className="h-5 w-5 text-white bg-black p-1 rounded-full cursor-pointer">
                  <ImLinkedin2 />
                </button>
                <button className="text-2xl text-black cursor-pointer">
                  <AiFillTwitterCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductTab id={product?.id as string} />
      <RelatedProduct category={product?.category as string} />
    </div>
  );
};

export default ProductDetail;
