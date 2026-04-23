import { Component, JSX } from "solid-js";

import Navbar from "@components/shared/Navbar";
  
interface MainLayoutProps extends JSX.HTMLAttributes<HTMLElement> {}

const MainLayout: Component<MainLayoutProps> = (props) => {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  );
};

export default MainLayout;
