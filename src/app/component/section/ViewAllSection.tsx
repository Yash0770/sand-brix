"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import backgroundImage from "../../assets/backgroundImage/new-bg-with-logo.png";

import image1 from "../../assets/images/add-04.png";
import image2 from "../../assets/images/add-05.png";
import image3 from "../../assets/images/add-04.png";
import image4 from "../../assets/images/add-05.png";

const contentItems = [
  { image: image1, title: "Jana Handa - Episode 01" },
  { image: image2, title: "Jana Handa - Episode 02" },
  { image: image3, title: "Jana Handa - Episode 03" },
  { image: image4, title: "Jana Handa - Episode 04" },
];

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] cursor-pointer top-1/2 z-10 -translate-y-1/2 bg-transparent bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] cursor-pointer top-1/2 z-10 -translate-y-1/2 bg-transparent bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
    <ChevronRight size={24} />
  </button>
);

const ViewAllSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background image section */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <img src={backgroundImage.src} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Content overlapping bottom 20% of the image */}
      <div className="-mt-[12%] absolute z-10 relative max-w-7xl mx-auto px-4">
        <div className="bg-opacity-80 p-6 rounded-md">
          <div className="flex justify-center items-center mb-6">
            <button className="text-white bg-red-600 cursor-pointer hover:bg-red-700 px-8 py-2 rounded-sm transition-colors">
              View All
            </button>
          </div>

          <div className="relative mt-6">
            <Slider {...settings}>
              {contentItems.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="group cursor-pointer">
                    <div className="rounded-sm overflow-hidden border border-gray-600 group-hover:border-white transition-all duration-300 mb-2">
                      <img
                        src={item.image.src}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-white text-center text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAllSection;
