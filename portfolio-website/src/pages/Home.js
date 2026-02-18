import React from "react";
import CardsGrid from "../components/CardsGrid";
import AboutSection from "../components/AboutSection";
import HomeHero from "../components/HomeHero";
import Process from "../components/Process";
import ImageScroller from "../components/ImageScroller";

const Home = () => {
  return (
    <>
      <HomeHero />
      <CardsGrid />
      <AboutSection />
      <Process />
      <ImageScroller />
    </>
  );
};

export default Home;
