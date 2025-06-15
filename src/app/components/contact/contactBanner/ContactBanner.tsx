"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import bannerImg from "../../../../../public/asset/shop/banner.png";
import logo from "../../../../../public/asset/furniro_logo.png";
import Image from "next/image";

const ContactBanner = () => {
  const pathName = usePathname();
  const pageName = pathName.replace("/", "");

  return (
    <div className="relative flex item-center justify-center md:pt-10">
      <Image
        className="lg:w-[1980px] min-h-60 bg-[#f9f0e7]"
        src={bannerImg}
        alt="shop_banner"
      ></Image>
      <div className="absolute top-2/7 md:top-2/5 flex flex-col items-center gap-2 ">
        <Image src={logo} alt="logo_image" />
        <h2 className="text-[24px] md:text-[36px] lg:text-[48px] font-medium capitalize">
          {pageName}
        </h2>
        <div className="flex flex-row items-center gap-2">
          <h3 className="font-semibold">
            <Link href={"/"}>Home &gt;</Link>
          </h3>
          <p className="capitalize">{pageName}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
