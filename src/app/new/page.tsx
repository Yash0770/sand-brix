"use client";

import React from "react";
import Header from "../component/Header";
import LiveHighlightSection from "../component/section/LiveHighlightSection";
import NewsSection from "../component/section/NewsSection";
import TrendingSection from "../component/section/TrendingSection";
import ViewAllSection from "../component/section/ViewAllSection";
import VideoPlaySection from "../component/section/VideoPlaySection";
import PopularLiveStreamingSection from "../component/section/PopularLiveStreamingSection";
import RecentlyViewedSection from "../component/section/RecentlyViewedSection";
import Footer from "../component/Footer";
import AllInOneSection from "../component/section/AllInOneSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  return (
    <>
      <div className="bg-[#170000]">
        <Header />
        <AllInOneSection />
        <LiveHighlightSection />
        <NewsSection />
        <TrendingSection />
        <ViewAllSection />
        <VideoPlaySection />
        <PopularLiveStreamingSection />
        <RecentlyViewedSection />
        <Footer />
      </div>
    </>
  );
};

export default page;
