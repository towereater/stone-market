import { Component, JSX } from "solid-js";

import AccessNavbar from "@components/shared/AccessNavbar";

interface AccessLayoutProps extends JSX.HTMLAttributes<HTMLElement> {}

const AccessLayout: Component<AccessLayoutProps> = (props) => {
  return (
    <>
      <AccessNavbar/>
      {props.children}
    </>
  );
};

export default AccessLayout;
