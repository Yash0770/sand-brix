import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import LiveHighlightSection from "./section/LiveHighlistSection";
import NewsSection from "./section/NewsSection";
import TrendingSection from "./section/TrendingSection";
import ViewAllSection from "./section/ViewAllSection";
import VideoPlaySection from "./section/VideoPlaySection";
import PopularLiveStreamingSection from "./section/PopularLiveStreamingSection";
import RecentlyViewedSection from "./section/RecentlyViewedSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <LiveHighlightSection />
      <NewsSection />
      <TrendingSection />
      <ViewAllSection />
      <VideoPlaySection />
      <PopularLiveStreamingSection />
      <RecentlyViewedSection />
      <Footer />
    </>
  );
};

export default Home;
