import React from "react";
import { ReadingModeProvider } from "../context/ReadingModeContext";
import { HeroSceneProvider } from "../context/HeroSceneContext";
import HomeScene from "../components/HomeScene";
import FeaturedWork from "../components/FeaturedWork";
import AboutSection from "../components/AboutSection";
import Process from "../components/Process";
import ImageScroller from "../components/ImageScroller";

const Home = () => {
  return (
    <ReadingModeProvider>
    <HeroSceneProvider>
      <HomeScene />
      <FeaturedWork />
      <AboutSection />
      <Process />
      <ImageScroller />
    </HeroSceneProvider>
    </ReadingModeProvider>
  );
};

export default Home;
