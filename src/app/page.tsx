'use client'
import Header from "./component/Header";
import Banner from "./component/Banner";
import LiveHighlightSection from "./component/section/LiveHighlistSection";
import NewsSection from "./component/section/NewsSection";
import ViewAllSection from "./component/section/ViewAllSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlaySection from "./component/section/VideoPlaySection";
import PopularLiveStreamingSection from "./component/section/PopularLiveStreamingSection";
import RecentlyViewedSection from "./component/section/RecentlyViewedSection";
import Footer from "./component/Footer";
import TrendingSection from "./component/section/TrendingSection";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <LiveHighlightSection />
      <NewsSection />
      <TrendingSection/>
      <ViewAllSection />
      <VideoPlaySection/>
      <PopularLiveStreamingSection />
      <RecentlyViewedSection />
      <Footer/>
    </>
  );
}
