"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import add1 from "../../assets/images/add-01.png";
import add2 from "../../assets/images/add-02.png";

// Sample data - replace with your actual recently viewed items
const recentlyViewedItems = [
  { id: 1, title: "add-1", image: add1 },
  { id: 2, title: "add-2", image: add2 },
  { id: 3, title: "add-2", image: add1 },
  { id: 4, title: "add-2", image: add2 },
  { id: 5, title: "add-2", image: add1 },
  { id: 6, title: "add-2", image: add2 },
  { id: 7, title: "add-2", image: add1 },
  { id: 8, title: "add-2", image: add2 },
  { id: 9, title: "add-2", image: add1 },
  { id: 10, title: "add-2", image: add2 },
];

// Custom arrow components
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-28px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
      <ChevronLeft size={24} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-28px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
      <ChevronRight size={24} />
    </button>
  );
};

const RecentlyViewedSection = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1536, // xl screens
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280, // lg screens
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // md screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Recently Viewed</h2>

        {/* Slider Container */}
        <div className="relative">
          <Slider {...settings}>
            {recentlyViewedItems.map((item) => (
              <div key={item.id} className="px-1">
                <div className="group cursor-pointer">
                  <div className="relative h-50 w-full rounded-md overflow-hidden border border-gray-700 group-hover:border-white transition-all duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewedSection;
