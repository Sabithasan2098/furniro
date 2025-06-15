import React from "react";
import posts from "@/app/blog.json";
import Image from "next/image";
import dayjs from "dayjs";
import admin from "../../../../../public/asset/blog/admin.png";
import date from "../../../../../public/asset/blog/date.png";
import matrial from "../../../../../public/asset/blog/matrial.png";
import categories from "@/app/categoris.json";

type TBlog = {
  id: string;
  author: string;
  date: string;
  material: string;
  title: string;
  desc: string;
  image: string;
};

const BlogContent = () => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const pastPosts: TBlog[] = sortedPosts.slice(0, 3);

  const recentPosts: TBlog[] = sortedPosts.slice(3);

  return (
    <div className="mt-6 md:mt-12 lg:mt-16 flex flex-col-reverse md:flex-row gap-6 md:gap-10 lg:gap-20 max-w-[1220px] mx-auto px-2 md:px-6 lg:px-0">
      <div className="basis-5/7">
        {pastPosts.map((data) => (
          <div key={data.id}>
            <Image
              src={data.image}
              alt="blog_image"
              height={400}
              width={400}
              className="w-full  object-cover"
            />
            <div className="flex gap-4 md:gap-8 items-center mt-2 md:mt-5">
              <div className="flex gap-2 items-center">
                <Image
                  src={admin}
                  alt=""
                  width={16}
                  height={16}
                  className="h-3 w-3 md:h-4 md:w-4"
                />
                <p className="text-[12px] md:text-[16px] text-[#9f9f9f] capitalize">
                  {data.author}
                </p>
              </div>
              <div className="flex gap-1 md:gap-2 items-center">
                <Image
                  src={date}
                  alt=""
                  width={16}
                  height={16}
                  className="h-3 w-3 md:h-4 md:w-4"
                />
                <p className="text-[12px] md:text-[16px] text-[#9f9f9f] capitalize">
                  {dayjs(data.date).format("DD MMM YYYY")}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={matrial}
                  alt=""
                  width={16}
                  height={16}
                  className="h-3 w-3 md:h-4 md:w-4"
                />
                <p className="text-[12px] md:text-[16px] text-[#9f9f9f] capitalize">
                  {data.material}
                </p>
              </div>
            </div>
            <h2 className="text-[20px] md:text-[30px] font-medium capitalize mt-3 md:mt-6">
              {data.title}
            </h2>
            <p className="text-[10px] text-[#9f9f9f] md:text-[15px] mt-1 md:mt-3">
              {data.desc}
            </p>
            <button className="relative inline-block mt-2 md:mt-5 mb-7 md:mb-14 cursor-pointer text-xs md:text-[16px] pb-1 md:pb-2">
              Read More
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-black w-10 md:w-16"></span>
            </button>
          </div>
        ))}
      </div>
      <div className="basis-2/7">
        <label className="flex items-center border border-gray-400 px-4 py-2 rounded-xl w-full max-w-md">
          <input
            type="search"
            className="grow outline-none text-base lg:h-10 "
          />
          <svg
            className="w-6 h-6  ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </label>
        <div className="px-6 lg:px-10">
          <h2 className=" text-[19px] md:text-[24px] font-medium mt-6 md:mt-10 mb-2 md:mb-4">
            Categories
          </h2>
          {categories.map((data) => (
            <div
              key={data.title}
              className="flex items-center justify-between "
            >
              <h4 className="capitalize text-[#9f9f9f] py-[10px] md:py-[18px]">
                {data.title}
              </h4>
              <p className="text-[#9f9f9f] py-[10px] md:py-[18px]">
                {data.productCount}
              </p>
            </div>
          ))}
          <h2 className=" text-[19px] md:text-[24px] font-medium mt-8 md:mt-20 mb-5 md:mb-9">
            Recent Posts
          </h2>
          <div className="flex flex-col gap-8">
            {recentPosts.map((data) => (
              <div key={data.id} className="flex gap-2 md:gap-3 items-center">
                <Image
                  src={data.image}
                  alt="product_image"
                  height={80}
                  width={80}
                  className="rounded-xl object-cover h-auto w-auto lg:h-[80px] lg:w-[80px]"
                />
                <div>
                  <h4 className="text-[14px]">{data.title}</h4>
                  <p className="text-[12px] text-[#9f9f9f] pt-1 md:pt-2">
                    {dayjs(data.date).format("DD MMM YYYY")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
