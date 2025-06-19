"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import Image from "next/image";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";
import teamImage from "../../assets/images/CSK.png";
import teamImageTwo from "../../assets/images/rcb.png";
import bigImage from "../../assets/images/livematchImage.jpg";
import teamOne from "../../assets/images/Group 2414.png";
import teamTwo from "../../assets/images/Group 2415.png";
import SectionHeading from "../SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

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

const LiveHighlightSection: React.FC = () => {
  const matchInfo = {
    title: "Watch Live IPL Match & Highlights",
    teams: {
      team1: "CSK",
      team2: "RCB",
      fullMatch: "Chennai Super Kings VS Royal Challengers Bengaluru",
    },
    date: "30 Apr, 2025 |",
    highlights: Array(6).fill({
      title: "Narine's Delhi Magic - Runs, wickets, run out, catch",
      date: "25 Apr 2025 |",
    }),
  };

  const teams = [
    {
      name: "CHAMBAL",
      subname: "GHARIYALS",
      stadiumLocation: "Stadium B, Location B",
    },
    {
      name: "JABALPUR",
      subname: "ROYAL LIONS",
      stadiumLocation: "Stadium A, Location A",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      className="bg-[#170000] shadow-sm w-full mt-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className="container custom-container mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        {/* Section Title */}
        <SectionHeading
          title="Watch Live IPL Match & Highlights"
          listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />

        {/* Match Highlights */}
        <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 min-h-[230px]">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-full">
                <div
                  className={`border-2 ${
                    index === 0 ? "border-red-500" : "border-gray-700"
                  } border-opacity-25 rounded-md overflow-hidden cursor-pointer group bg-black relative`}>
                  <Image
                    src={bigImage}
                    alt="Live Match"
                    width={562}
                    height={340}
                    className="object-cover transition-transform group-hover:scale-105"
                  />

                  {/* Match Info Overlay */}
                  <div className="absolute top-0 left-0 right-0 p-3 text-white flex justify-between items-center text-sm gap-2">
                    <div className="flex items-center text-[#FFFFFF] gap-2 text-xs">
                      <span className="opacity-80">{matchInfo.date}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white opacity-80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span>23.5K</span>
                    </div>

                    {index === 0 && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-md">
                          <span className="flex h-2 w-2">
                            <span className="animate-ping inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          <span className="text-xs font-bold">LIVE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`absolute ${
                      index === 0 ? "bottom-12" : "bottom-2"
                    } left-1/2 transform -translate-x-1/2 whitespace-nowrap flex flex-col gap-1 text-white text-xs`}>
                    <div className="font-normal text-center text-lg">TATA IPL 2025 T20 MATCH</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span>Match - 15</span>
                        <span className="text-gray-300">|</span>
                        <span>Match starts at - 7:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Transparent */}
                  {index === 0 && (
                    <div
                      className="absolute rounded bottom-0 left-11 right-11 p-2"
                      style={{ backgroundColor: "rgba(162, 154, 154, 0.5)" }}>
                      <div className="flex justify-center items-center gap-4 text-white lg:text-sm md:text-xs whitespace-nowrap overflow-hidden">
                        {/* Team 1 */}
                        <div className="flex items-center gap-1">
                          <span className="font-normal ">{matchInfo.teams.team1}</span>
                          <Image src={teamImage} alt="Team 1" width={32} height={32} />
                          <span>250-10(20)</span>
                        </div>

                        <div className="text-red-500 font-bold">vs</div>

                        {/* Team 2 */}
                        <div className="flex items-center gap-1">
                          <span>250-10(20)</span>
                          <Image src={teamImageTwo} alt="Team 2" width={32} height={32} />
                          <span className="font-normal">{matchInfo.teams.team2}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Slider */}
        <div className="mt-5 px-1">
          <Slider {...settings}>
            {teams.map((team, index) => (
              <div key={index} className="px-1">
                <div className="bg-[#170000] border-2 border-red-500 rounded-sm px-4 py-2 text-center cursor-pointer relative">
                  <div className="absolute top-1 left-2 bg-red-600 text-white text-[10px] font-normal px-2 rounded-sm">
                    LIVE
                  </div>

                  <div className="text-center text-[#9F9F9F] text-xs font-normal">
                    Narendra Modi Stadium
                  </div>

                  <div className="flex items-center justify-between mt-1 gap-2 text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Image src={teamOne} alt="Team 1" width={52} height={52} />
                      <div className="flex flex-col items-start text-sm ml-1 leading-tight text-white">
                        <div>{teams[0].name}</div>
                        <div>{teams[0].subname}</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="text-red-500 font-bold text-sm px-2">vs</div>
                      <div className="text-center">
                        <button className="text-white text-xs font-normal underline py-1 px-4 rounded-md cursor-pointer">
                          View Live Match
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="flex flex-col items-start text-sm mr-1 leading-tight text-white">
                        <div>{teams[0].name}</div>
                        <div>{teams[0].subname}</div>
                      </div>
                      <Image src={teamTwo} alt="Team 1" width={52} height={52} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Load More Button */}
        <div className="mt-5 w-full cursor-pointer">
          <button className="w-full text-center text-white text-sm font-semibold py-2 group bg-[#282828] rounded-sm cursor-pointer">
            <span className="inline-block relative text-[#9F9F9F]">
              Load More +
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F9F9F] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveHighlightSection;
