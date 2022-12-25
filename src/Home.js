import React from "react";
import Banner from "./components/Banner";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Dharmendra Enterprises",
    head: "Welcome to",
    src: "images/hero.jpg"
  };

  return (<>
    <HeroSection myData={data} />
    <Services />
    <FeatureProduct />
    <Banner />
  </>
  );
};

export default Home;