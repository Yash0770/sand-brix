"use client";
import { useParams } from "next/navigation";
import React from "react";
import Documentary from "../../documentary/Documentary";

const page = () => {
  const id = useParams();

  return (
    <>
      <Documentary />
    </>
  );
};

export default page;
