import { Component } from "solid-js";
import Navbar from "@/components/common/Navbar";

const ProfileLayout: Component<any> = (props) => {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  );
};

export default ProfileLayout;
