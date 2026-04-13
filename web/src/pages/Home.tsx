import { Component } from "solid-js";
import Hero from "@components/features/Hero";
import FeaturedSales from "@components/features/FeaturedSales";

const Home: Component = () => {
  return (
    <>
      <Hero />
      <FeaturedSales />
    </>
  );
};

export default Home;
