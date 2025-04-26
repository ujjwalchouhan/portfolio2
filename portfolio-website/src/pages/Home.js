import React from "react";
import CardsGrid from "../components/CardsGrid";
import InfiniteScroll from "../components/InfiniteScroll";
import ImageScroller from "../components/ImageScroller";
import HomeHero from "../components/HomeHero";
import Process from "../components/Process";


const Home = () => {
  return (
    <>
      <HomeHero />
      <InfiniteScroll />
      <CardsGrid />
      <Process />
      <ImageScroller />
    </>
  );
};

export default Home;
