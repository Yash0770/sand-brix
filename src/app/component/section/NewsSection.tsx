"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

// Import your images
import image1 from "../../assets/images/news-01.png";
import image2 from "../../assets/images/new-02.png";
import image3 from "../../assets/images/news-01.png";
import image4 from "../../assets/images/new-02.png";
import image5 from "../../assets/images/news-01.png";

// Create array of images to repeat
const newsImages = [image1, image2, image3, image4, image5];

// Custom arrow components positioned outside the slider
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-35px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 p-2 rounded-full text-[#9F9F9F00 ] hover:bg-opacity-70 transition-all">
      <ChevronLeft size={40} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-38px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 p-2 rounded-full text-[#9F9F9F00 ] hover:bg-opacity-70 transition-all">
      <ChevronRight size={40} />
    </button>
  );
};

const NewsSection = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-black shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
          <SectionHeading
            title="News & Politics"
            listItems={[
              { label: "Today", active: true },
              { label: "This Week" },
              { label: "This Month" },
              { label: "Last Month" },
            ]}
          />

          {/* News Slider with arrows outside */}
          <div className="py-2 relative">
            <div className="relative">
              <Slider {...settings}>
                {newsImages.map((image, index) => (
                  <div key={index} className="px-2">
                    <div className="rounded-md overflow-hidden cursor-pointer border-2 border-[#282828] hover:border-[#909090] transition-all duration-300">
                      <img
                        src={image.src}
                        alt={`News ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Load More Button */}
          <div className="mt-1 w-full cursor-pointer">
            <button className="w-full text-center text-white text-sm font-semibold py-2 group bg-[#282828] rounded-sm cursor-pointer">
              <span className="inline-block relative text-[#9F9F9F]">
                Load more +
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F9F9F] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
