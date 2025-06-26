"use client";
import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Documentaries from "./component/Documentaries";

const page = () => {
  return (
    <>
      <Header />
      <Documentaries/>
      <Footer />
    </>
  );
};

export default page;
