"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./component/Banner";
import LiveHighlightSection from "./component/section/LiveHighlightSection";
import NewsSection from "./component/section/NewsSection";
import TrendingSection from "./component/section/TrendingSection";
import ViewAllSection from "./component/section/ViewAllSection";
import VideoPlaySection from "./component/section/VideoPlaySection";
import PopularLiveStreamingSection from "./component/section/PopularLiveStreamingSection";
import RecentlyViewedSection from "./component/section/RecentlyViewedSection";


export default function page() {
  return (
    <>
       <Banner />
      <LiveHighlightSection />
      <NewsSection />
      <TrendingSection />
      <ViewAllSection />
      <VideoPlaySection />
      <PopularLiveStreamingSection />
      <RecentlyViewedSection />
    </>
  );
}