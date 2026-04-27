import { Component } from "solid-js";

import Hero from "@components/Home/Hero";
import FeaturedSales from "@components/Home/FeaturedSales";

const Home: Component = () => {
  return (
    <>
      <Hero />
      <FeaturedSales />
    </>
  );
};

export default Home;
