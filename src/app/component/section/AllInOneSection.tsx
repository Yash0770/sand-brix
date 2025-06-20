import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import bgImage from "../../assets/banner/Group 2416.png";
import image1 from "../../assets/banner/20x10_collage-new.jpg";
import image2 from "../../assets/banner/20x10_collage-scaled.jpg";

const bannerImages = [image1, image2];

interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70">
      <ChevronLeft size={24} />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70">
      <ChevronRight size={24} />
    </button>
  );
};

const AllInOneSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-gray-400 transition-all duration-300"></div>
    ),
  };

  return (
    <section className="relative w-full bg-black py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-100">
        <Image src={bgImage} alt="Background" fill className="object-cover" quality={100} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center select-none">
        <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
          All-in-One OTT Magic
          <br />
          Only in Sri Lanka
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-[#9F9F9F] md:text-xl">
          All your favorite shows, movies, and live events—streamed anytime, anywhere.
          <br />
          Experience world-class entertainment tailored for{" "}
          <span className="text-white">Sri Lanka.</span>
        </p>
        <button className="mb-12 rounded-md shadow-xl bg-red-600 cursor-pointer px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-red-700">
          Sign in
        </button>

        {/* Slider */}
        <div className="w-full max-w-7xl">
          <Slider {...sliderSettings}>
            {bannerImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={`Content ${index + 1}`}
                    width={800}
                    height={450}
                    // className="h-auto w-full object-cover"
                    className="h-[400px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AllInOneSection;
