"use client";
import { useState } from "react";
import Image from "next/image";
import { TbShoppingBagX } from "react-icons/tb";
import image2 from "../../../../../../public/asset/navbar/Vector-2.png";
import { TiDelete } from "react-icons/ti";
import cartData from "@/app/cartData.json";
import Link from "next/link";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const price = cartData
    .filter((data) => data.price)
    .map((data) => parseInt(data.price))
    .reduce((acc, curr) => acc + curr, 0);
  const totalPrice = price.toLocaleString();

  return (
    <div>
      {/* Cart Button */}
      <button onClick={toggleDrawer} className="cursor-pointer py-2">
        <Image
          src={image2}
          alt="product"
          className="h-[14px] w-4 md:h-7 md:w-7"
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0  w-[340px] sm:w-[400px] bg-white z-50 shadow-lg transition-transform duration-300  md:min-h-[746px]  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 ">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
            <button onClick={toggleDrawer}>
              {/* <TiDelete /> */}
              <TbShoppingBagX className="text-xl" />
            </button>
          </div>

          {/* Cart Items (Dummy) */}
          <div className="space-y-4 min-h-96">
            {cartData.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <Image
                  src={item.img}
                  alt="product"
                  className="h-[105px] rounded-md object-cover"
                  width={105}
                  height={105}
                />
                <div className="flex-1">
                  <p className="text-[16px]">{item.title}</p>
                  <div className="text text-gray-600 mt-2 flex items-center gap-2">
                    <p>{item.quantity}</p>
                    <p className="text-[12px]">X</p>
                    <p className="text-[#b89028] text-[12px] font-medium">
                      Rs. {item.price}
                    </p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-red-500 cursor-pointer">
                  <TiDelete className="text-2xl" />{" "}
                </button>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="mt-6 flex items-center gap-20 font-semibold text-[16px]">
            <span className="font-normal">Subtotal</span>
            <span className="text-yellow-600">Rs. {totalPrice}.000</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3 justify-between border-t-[2px] border-gray-200 pt-5">
            <Link href={"/cart"}>
              <button
                className="border px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={toggleDrawer}
              >
                Cart
              </button>
            </Link>
            <Link href={"/checkOut"}>
              <button
                className="border px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={toggleDrawer}
              >
                Checkout
              </button>
            </Link>
            <Link href={"/comparison"}>
              <button
                className="border px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={toggleDrawer}
              >
                Comparison
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
