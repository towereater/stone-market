import { Component } from "solid-js";
import Navbar from "@/components/common/Navbar";

const MainLayout: Component<any> = (props) => {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  );
};

export default MainLayout;
