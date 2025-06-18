"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import image1 from "../assets/banner/banner-01.png";
import image2 from "../assets/banner/banner-02.png";
import image4 from "../assets/banner/banner-01.png";
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
    { id: 4, image: image4, alt: "Banner 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const prevIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === banners.length - 1 ? 0 : currentIndex + 1;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(nextIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, nextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToBanner = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="w-full mt-5">
      <div className="relative w-full h-[550px] overflow-hidden flex">
        {/* Previous Banner Preview */}
        <div
          className="w-[20%] h-full relative cursor-pointer overflow-hidden"
          onClick={goToPrevious}>
          <Image
            src={banners[prevIndex].image}
            alt={banners[prevIndex].alt}
            fill
            className="object-cover object-right opacity-70 transition-opacity duration-300"
            sizes="15vw"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-70 cursor-pointer">
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Active Banner */}
        <div className="w-[60%] cursor-pointer relative overflow-hidden mx-5">
          <Image
            src={banners[currentIndex].image}
            alt={banners[currentIndex].alt}
            fill
            className={`object-fit transition-opacity duration-500 border-2 border-white rounded ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            sizes="70vw"
            priority
          />
        </div>

        {/* Next Banner Preview */}
        <div className="w-[20%] h-full relative cursor-pointer overflow-hidden" onClick={goToNext}>
          <Image
            src={banners[nextIndex].image}
            alt={banners[nextIndex].alt}
            fill
            className="object-cover opacity-70 object-left transition-opacity duration-300"
            sizes="15vw"
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

      <style jsx>{`
        @media (max-width: 1024px) {
          .banner-image {
            width: 100%;
            height: 550px;
          }
        }
        @media (min-width: 1025px) {
          .banner-image {
            width: 1143px;
            height: 550px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
