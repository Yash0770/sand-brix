import React from "react";
import Image from "next/image";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";
import bigImage from "../../assets/images/livematchImage.jpg";
import smallImage from "../../assets/images/livematchSmallImage.jpg";
import SectionHeading from "../SectionHeading";

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

  return (
    <div
      className="bg-[#170000] shadow-sm w-full mt-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
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

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 min-h-[300px]">
          {/* Left Side - Big Image (Reduced width) */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="w-full h-[300px] border-3 border-red-500 border-opacity-25 rounded-md overflow-hidden cursor-pointer group bg-black relative">
              <Image
                src={bigImage}
                alt="Live Match"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />

              {/* Match Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 text-white flex justify-between items-center text-sm gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-md">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span className="text-xs font-bold">Live</span>
                  </div>
                  <span className="text-white font-medium text-xs">
                    {matchInfo.teams.fullMatch}
                  </span>
                </div>

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
              </div>
            </div>
          </div>

          {/* Right Side - Grid of 6 Small Images (Increased width) */}
          <div className="w-full lg:w-[55%] grid grid-cols-2 md:grid-cols-3 gap-4">
            {matchInfo.highlights.map((highlight, index) => (
              <div key={index} className="col-span-1 cursor-pointer group">
                <div className="w-full h-[141px] border border-[#404040] border-opacity-25 rounded-sm overflow-hidden bg-black relative">
                  <Image
                    src={smallImage}
                    alt="Highlight"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <p className="text-xs text-white line-clamp-2">{highlight.title}</p>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="opacity-80">{highlight.date}</span>
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
                      <span>10.5K</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-3 w-full cursor-pointer">
          <button className="w-full text-center text-white text-sm font-semibold py-2 group bg-[#282828] rounded-sm cursor-pointer">
            <span className="inline-block relative text-[#9F9F9F]">
              Load more +
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F9F9F] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveHighlightSection;
