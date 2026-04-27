import { Component, JSX } from "solid-js";

import AccessNavbar from "@components/shared/AccessNavbar";

interface AccessLayoutProps extends JSX.HTMLAttributes<HTMLElement> {}

const AccessLayout: Component<AccessLayoutProps> = (props) => {
  return (
    <>
      <AccessNavbar/>

      <main>
        {props.children}
      </main>
    </>
  );
};

export default AccessLayout;
