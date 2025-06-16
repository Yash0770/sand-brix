"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../assets/banner/banner-01.png";
import image2 from "../assets/banner/banner-02.png";
import image3 from "../assets/image3.png";
import image4 from "../assets//banner/banner-01.png";
import image5 from "../assets/image5.png";
import { StaticImageData } from "next/image";

interface Banner {
  id: number;
  image: StaticImageData;
  alt: string;
}

const Banner: React.FC = () => {
  const banners: Banner[] = [
    { id: 1, image: image1, alt: "Banner 1" },
    { id: 2, image: image2, alt: "Banner 2" },
    // { id: 3, image: image3, alt: "Banner 3" },
    { id: 4, image: image4, alt: "Banner 4" },
    // { id: 5, image: image5, alt: "Banner 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const prevIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === banners.length - 1 ? 0 : currentIndex + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(nextIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToBanner = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="w-full mt-7">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex">
      {/* <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] overflow-hidden flex"> */}
      {/* <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] max-h-[500px] overflow-hidden flex"> */}
      {/* <div
        className="relative w-full max-w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] max-h-[450px] mx-auto flex overflow-hidden"> */}
        {/* Previous Banner Preview */}
        <div
          className="w-[15%] h-full relative cursor-pointer overflow-hidden"
          onClick={goToPrevious}>
          <img
            src={banners[prevIndex].image.src}
            alt={banners[prevIndex].alt}
            // className="w-full h-full object-cover scale-150 translate-x-[-25%] opacity-70 transition-opacity duration-300"
            className="w-full h-full object-cover object-right opacity-70 transition-opacity duration-300"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-70 cursor-pointer">
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Active Banner */}
        <div className="w-[70%] relative overflow-hidden ml-5 mr-5">
          <img
            src={banners[currentIndex].image.src}
            alt={banners[currentIndex].alt}
            className={`w-full h-full object-fit transition-opacity duration-500 border-2 rounded ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Next Banner Preview */}
        <div className="w-[15%] h-full relative cursor-pointer overflow-hidden" onClick={goToNext}>
          <img
            src={banners[nextIndex].image.src}
            alt={banners[nextIndex].alt}
            // className="w-full h-full object-cover scale-150 translate-x-[25%] opacity-70 transition-opacity duration-300"
            className="w-full h-full object-cover opacity-70 object-left transition-opacity duration-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-70 cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? "bg-red-500 w-3 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;

//for animation
//anim
