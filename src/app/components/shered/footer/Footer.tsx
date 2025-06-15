import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="border-t-[1.5px] border-[#d9d9d9]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-start max-w-7xl lg:mx-auto mx-auto gap-10 py-6 md:py-16 md:mx-10">
        <div className=" px-10 md:px-0">
          <h2 className="font-bold text-[24px] pb-10 text-start">Funiro.</h2>
          <p className="text-[#9f9f9f] text-start">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-10 justify-start border-t-[1.5px] border-[#d9d9d9] md:border-none mx-10 md:mx-0 pt-4 md:pt-0 lg:px-36 text-start">
          <h4 className="pb-3 text-[#9f9f9f] ">Links</h4>
          <ul className="lg:space-y-10 md:space-y-5 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-none">
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>Shop</Link>
            </li>
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>About</Link>
            </li>
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 md:gap-10 justify-start border-t-[1.5px] border-[#d9d9d9] md:border-none mx-10 md:mx-0 pt-4 md:pt-0 lg:pl-20 text-start">
          <h4 className="pb-3 text-[#9f9f9f]">Help</h4>
          <ul className="lg:space-y-10 md:space-y-5 grid grid-cols-2  lg:grid-cols-none gap-3 md:gap-0">
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>Payment Options</Link>
            </li>
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>Returns</Link>
            </li>
            <li className="font-normal md:font-semibold">
              <Link href={"#"}>Privacy Policies</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-10 justify-start border-t-[1.5px] border-[#d9d9d9] md:border-none mx-10 md:mx-0 pt-4 md:pt-0 text-start">
          <h4 className="pb-3 text-[#9f9f9f]">Newsletter</h4>
          <div className="flex gap-2 justify-start">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address"
              className="border-none outline-none text-black underline focus:no-underline focus:bg-[#d9d9d9] placeholder-[#9f9f9f] px-2"
            />
            <button
              type="submit"
              className="uppercase underline cursor-pointer font-semibold"
            >
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <p className="border-t-[1.5px] border-[#d9d9d9] py-6 pl-2">
          2023 furino. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
