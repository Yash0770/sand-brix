"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";



import image1 from "@/app/assets/sports/gallary-1.jpg";
import image2 from "@/app/assets/sports/gallary-2.jpg";
import image3 from "@/app/assets/sports/gallary-3.jpg";
import image4 from "@/app/assets/sports/gallary-4.jpg";
import image5 from "@/app/assets/sports/gallary-5.jpg";
import image6 from "@/app/assets/sports/gallary-6.jpg";
import image7 from "@/app/assets/sports/gallary-7.jpg";
import image8 from "@/app/assets/sports/gallary-8.jpg";
import image9 from "@/app/assets/sports/gallary-9.jpg";
import image10 from "@/app/assets/sports/gallary-1.jpg";
import image11 from "@/app/assets/sports/gallary-1.jpg";
import image12 from  "@/app/assets/sports/gallary-2.jpg"
;




const imageSlides = [
  { src: image1, caption: "" },
  { src: image2, caption: "" },
  { src: image3, caption: "" },
  { src: image4, caption: "" },
{ src: image5, caption: "" },
  { src: image6, caption: "" },
  { src: image7, caption: "" },
  { src: image8, caption: "" },
  { src: image9, caption: "" },
  { src: image10, caption: "" },
  { src: image11, caption: "" },
  { src: image12, caption: "" },
]

export default function OurMediaGallery(){

    interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
      onClick?: () => void;
    }
    
    const HighlightsPrevArrow = ({ onClick }: ArrowProps) => {
      return (
        <button
          onClick={onClick}
          className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden">
          <ChevronLeft size={40} />
        </button>
      );
    };
    
    const HighlightsNextArrow = ({ onClick }: ArrowProps) => {
      return (
        <button
          onClick={onClick}
          className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden">
          <ChevronRight size={40} />
        </button>
      );
    };
    
    const PrevArrow = ({ onClick }: ArrowProps) => {
      return (
        <button
          onClick={onClick}
          className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all">
          <ChevronLeft size={40} />
        </button>
      );
    };
    
    const NextArrow = ({ onClick }: ArrowProps) => {
      return (
        <button
          onClick={onClick}
          className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all">
          <ChevronRight size={40} />
        </button>
      );
    };

      const mainSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: "ondemand" as LazyLoadTypes,
        prevArrow: <HighlightsPrevArrow />,
        nextArrow: <HighlightsNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              autoplay: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
        ],
      };

     const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        lazyLoad: "ondemand" as LazyLoadTypes,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              autoplay: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
        ],
      };
  return (
     <div
      className="bg-[#180000] shadow-sm w-full mt-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className=" custom-container mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">


        {/* Section Title */}
        <SectionHeading
          title="Our Media Gallery"
             listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />



        {/* Images*/}
   <div className="flex flex-wrap gap-x-2 gap-y-[4px]">
  {imageSlides.map((slide, index) => (
    <div
      key={index}
      className="w-[200px] h-[193px] overflow-hidden"
    >
      <Image
        src={slide.src}
        alt={`Gallery Image ${index + 1}`}
        width={200}
        height={193}
        className="w-full h-full object-cover block"
      />
    </div>
  ))}
</div>

<div className="mt-3">
  <button className="w-full text-white text-sm font-semibold py-2 bg-[#282828] rounded-sm">
    Load More +
  </button>
</div>

     
      </div>

      
    </div>
  )
}
