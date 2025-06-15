"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../../../public/asset/furniro_logo.png";
import image1 from "../../../../../public/asset/navbar/Vector-1.png";
import image3 from "../../../../../public/asset/navbar/Vector.png";
import image4 from "../../../../../public/asset/navbar/akar-icons_heart.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartDrawer from "./cartDrawer/CartDrawer";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathName = usePathname();
  const nav = (
    <>
      {["/", "/shop", "/blog", "/contact"].map((path) => (
        <li key={path} className="font-medium">
          <Link
            href={path}
            onClick={closeDrawer}
            className={`${pathName === path ? "text-[#b98e2f]" : ""}`}
          >
            {path === "/"
              ? "Home"
              : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        </li>
      ))}
    </>
  );
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="navbar bg-white text-black shadow-sm md:fixed z-10 max-w-[1400px] mx-auto">
        <div className="navbar-start">
          <div className="relative lg:hidden">
            <div
              onClick={toggleDrawer}
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {mounted && isOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 p-2 flex flex-col space-y-2 text-gray-600 text-xs md:text-xl">
                {nav}
              </ul>
            )}
          </div>
          <Link
            href={"/"}
            className="hidden lg:flex items-center justify-center gap-2 pl-14 "
          >
            <Image src={logo} alt="logo_image" height={32} width={50} />
            <h2 className="text-[34px] font-bold">Furniro</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">{nav}</ul>
        </div>
        <div className="navbar-end">
          <ul className="flex  gap-2 md:gap-8 justify-center items-center list-none pr-5 md:pr-14">
            <li>
              <Link href={"/"}>
                {" "}
                <Image
                  className="h-[14px] w-4 md:h-[18px] md:w-5"
                  src={image3}
                  alt="nav_menu_btn"
                ></Image>{" "}
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                {" "}
                <Image
                  className="h-4 w-4 md:h-5 md:w-5"
                  src={image1}
                  alt="nav_menu_btn"
                ></Image>{" "}
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                {" "}
                <Image
                  className="h-4 w-4 md:h-[22px] md:w-[22px]"
                  src={image4}
                  alt="nav_menu_btn"
                ></Image>{" "}
              </Link>
            </li>
            <li>
              <CartDrawer />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
