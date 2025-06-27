import React from "react";
import Preview from "./Preview";
import PopularCategory from "./PopularCategory";
import ClassicDocumentaries from "./ClassicDocumentaries";
import ContinueWatching from "./ContinueWatching";
import TrendingDocumentaries from "./TrendingDocumentaries";

const Documentaries = () => {
  return (
    <>
      <Preview />
      <PopularCategory />
      <TrendingDocumentaries />
      <ClassicDocumentaries />
      <ContinueWatching />
    </>
  );
};

export default Documentaries;
