import { Component, JSX } from "solid-js";
import AccessNavbar from "@/components/common/AccessNavbar";

const AccessLayout: Component<any> = (props) => {
  return (
    <>
      <AccessNavbar/>
      {props.children}
    </>
  );
};

export default AccessLayout;
