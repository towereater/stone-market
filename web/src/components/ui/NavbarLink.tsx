import { Component, JSX, splitProps } from "solid-js";
import { A } from "@solidjs/router";

interface NavbarLinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const NavbarLink: Component<NavbarLinkProps> = (props) => {
  const [local, _] = splitProps(props, ["href", "children", "class"]);

  return (
    <A href={local.href} class="text-accent hover:text-[#c2c9cc] transition-colors">
      {local.children}
    </A>
  );
};

export default NavbarLink;
  