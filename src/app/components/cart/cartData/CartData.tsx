import React from "react";
import cart from "@/app/cartData.json";
import Image from "next/image";
import { TbTrashFilled } from "react-icons/tb";
import "./cartData.css";
import Link from "next/link";

const CartData = () => {
  const total = cart
    .map((data) => Number(data.price) * data.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10 my-16 px-2 mb-20">
      <div className="md:basis-2/3 w-full">
        <div className="overflow-x-auto w-full">
          <table className="table no-table-border ">
            {/* head */}
            <thead className="bg-[#f9f0e7] text-black font-medium text-[16px]">
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            {cart.map((data) => (
              <tbody key={data.id}>
                <tr>
                  <td className="h-[60px] w-[60px]">
                    <div className="avatar h-[55px] w-[55px]">
                      <Image
                        src={data.img}
                        alt="product_image"
                        height={55}
                        width={55}
                        className="rounded-md object-cover h-full w-full"
                      />
                    </div>
                  </td>
                  <td className="text-[#9f9f9f]">{data.title}</td>
                  <td className="text-[#9f9f9f] whitespace-nowrap">
                    Rs. {data.price}
                  </td>
                  <td>
                    <p className="ml-4 border-[1.5px] border-[#9f9f9f] rounded-md h-8 w-8 flex items-center justify-center">
                      {data.quantity}
                    </p>
                  </td>
                  <td className="whitespace-nowrap">
                    Rs. {(Number(data.price) * data.quantity).toLocaleString()}
                    .000
                  </td>
                  <th>
                    <button className="text-2xl text-[#b98e2f]">
                      <TbTrashFilled />
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div className="md:basis-1/3 w-full bg-[#f9f0e7] pt-2 pb-10 md:pb-24 flex flex-col items-center">
        <div className="flex flex-col md:items-center max-w-[200px] md:max-w-2xl mx-auto">
          <h2 className="text-[20px] md:text-[32px] font-semibold text-center">
            Cart Totals
          </h2>
          <div className="flex gap-16 items-center pt-4 md:pt-14 ">
            <p className="text-xs md:text-[16px] font-normal md:font-medium">
              Subtotal
            </p>
            <p className="text-xs text-[16px] text-[#9f9f9f]">
              Rs.{total.toLocaleString()}.000
            </p>
          </div>

          <div className="flex gap-16 items-center pt-2 md:pt-6 pb-3 md:pb-12 ">
            <p className="text-xs md:text-[16px] font-normal md:font-medium ">
              Total
            </p>
            <p className="font-medium text-sm md:text-[20px] text-[#b89028]">
              Rs.{total.toLocaleString()}.000
            </p>
          </div>
        </div>
        <Link href={"/checkOut"}>
          <button className="border-[1.5px] rounded-md md:rounded-xl px-8 md:px-12 py-2 text-sm md:text-[20px]">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartData;
