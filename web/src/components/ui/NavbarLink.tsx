import { Component, JSX, splitProps } from "solid-js";
import { A } from "@solidjs/router";

import styles from "@styles/NavbarLink.module.css";

interface NavbarLinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const NavbarLink: Component<NavbarLinkProps> = (props) => {
  const [local, _] = splitProps(props, ["href", "children", "class"]);

  return (
    <A href={local.href} class={styles.link}>
      {local.children}
    </A>
  );
};
