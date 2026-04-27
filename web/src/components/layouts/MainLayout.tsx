import { Component, JSX } from "solid-js";

import Navbar from "@components/shared/Navbar";
  
interface MainLayoutProps extends JSX.HTMLAttributes<HTMLElement> {}

const MainLayout: Component<MainLayoutProps> = (props) => {
  return (
    <>
      <Navbar/>

      <main>
        {props.children}
      </main>
    </>
  );
};

export default MainLayout;
