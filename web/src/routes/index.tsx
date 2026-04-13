import { Component } from "solid-js";
import Hero from "@components/features/Hero";
import FeaturedSales from "@components/features/FeaturedSales";
import Navbar from "@components/common/Navbar";

const Home: Component = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <FeaturedSales />
    </>
  );
};

export default Home;
