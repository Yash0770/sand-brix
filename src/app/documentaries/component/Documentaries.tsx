import React from "react";
import Preview from "./Preview";
import PopularCategory from "./PopularCategory";
import ClassicDocumentaries from "./ClassicDocumentaries";
import ContinueWatching from "./ContinueWatching";
import TrendingDocumentaries from "./TrendingDocumentaries";
import EditorsPick from "./EditorsPick";

const Documentaries = () => {
  return (
    <>
      <Preview />
      <PopularCategory />
      <TrendingDocumentaries />
      <EditorsPick />
      <ClassicDocumentaries />
      <ContinueWatching />
    </>
  );
};

export default Documentaries;
