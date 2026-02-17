import React from "react";
import CardsGrid from "../components/CardsGrid";
import AboutSection from "../components/AboutSection";
import ImageScroller from "../components/ImageScroller";
import HomeHero from "../components/HomeHero";
import Process from "../components/Process";

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
