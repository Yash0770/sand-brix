import React from "react";
import Preview from "./Preview";
import PopularCategory from "./PopularCategory";
import ClassicDocumentaries from "./ClassicDocumentaries";
import ContinueWatching from "./ContinueWatching";

const Documentaries = () => {
  return (
    <>
      <Preview />
      <PopularCategory />
      <ClassicDocumentaries />
      <ContinueWatching />
    </>
  );
};

export default Documentaries;
