"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slidesData = [
  {
    id: 1,
    title: "Inner Peace",
    subtitle: "01 — Bed Room",
    image: "https://i.ibb.co/FL19CLYz/Rectangle-24.png",
  },
  {
    id: 2,
    title: "Modern Simplicity",
    subtitle: "02 — Dining Room",
    image: "https://i.ibb.co/Z6Zvp5fY/Rectangle-25.png",
  },
  {
    id: 3,
    title: "Cozy Comfort",
    subtitle: "03 — Living Room",
    image: "https://i.ibb.co/cSC5n078/Rectangle-26.png",
  },
];

const Inspiration: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          beforeChange: (current: number, next: number) => setActiveIndex(next),
          dots: true,
        },
      },
    ],
    // DOT CONTAINER IS DEFINED HERE
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots-container">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 rounded-full transition-all ${
          i === activeIndex ? "bg-yellow-600" : "bg-gray-300"
        }`}
      />
    ),
  };

  const nextSlide = () => sliderRef.current?.slickNext();

  return (
    <div className="bg-[#fdf9f3] py-10 px-6 mt-8 md:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Content */}
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="mt-6 text-sm md:text-base font-light md:font-medium bg-yellow-600 text-white px-4 md:px-6 py-2 md:py-3  shadow hover:bg-yellow-700 transition flex items-center">
            Explore More
          </button>
        </div>

        {/* Slider */}
        <div className="md:col-span-2 relative md:pb-16">
          <Slider ref={sliderRef} {...settings}>
            {slidesData.map((slide, index) => (
              <div
                key={slide.id}
                className={`relative px-2 transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-100 z-10" // Active slide - larger and on top
                    : "scale-90" // Next slide - smaller
                }`}
              >
                <div
                  className={`relative overflow-hidden  ${
                    index === activeIndex
                      ? "h-[220px] md:h-[600px] w-[160px] md:w-full"
                      : "h-[180px] md:h-[500px] w-[150px] md:w-full"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content overlay - only visible on active slide */}
                {index === activeIndex && (
                  <div className="absolute bottom-2 md:bottom-8 left-4 md:left-10 flex">
                    <div className="bg-white z-10 opacity-80 px-4 md:px-14 py-2 md:py-8">
                      <p className="text-gray-500 text-[9px] md:text-sm">
                        {slide.subtitle}
                      </p>
                      <h3 className="text-[13px] md:text-xl font-semibold text-gray-800">
                        {slide.title}
                      </h3>
                    </div>
                    <button className="mt-8 md:mt-20 bg-yellow-600 text-white p-1 md:p-4 hover:bg-yellow-700 transition">
                      <BsArrowRight
                        size={20}
                        className="h-[12px] md:h-[20px] w-[12px] md:w-[20px]"
                      />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </Slider>

          {/* Navigation Arrow */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <LuChevronRight className="text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom dot positioning styles */}
      <style jsx global>{`
        .custom-dots-container {
          position: absolute;
          bottom: 20px;
          left: 75%;
          transform: translateX(-50%);
          z-index: 30;
        }

        @media (max-width: 1024px) {
          .custom-dots-container {
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
        }

        /* Adjust the slider container to accommodate dots */
        .slick-slider {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Inspiration;
