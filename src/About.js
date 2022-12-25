import React from "react";
import HeroSection from "./components/HeroSection";
import Services2 from "./components/Services2";
import {useProductContext } from "./context/productcontext";

const About = () => {
  const data = {
    name: "Furniture and Appliances",
    head: "we provide",
    src: "images/bg2.jpg",

  };

  // const { myName } = useProductContext();

  return (
    <>
      {/* {myName} */}
      <HeroSection myData={data} />
      <Services2 />;
    </>
  )
};

export default About;