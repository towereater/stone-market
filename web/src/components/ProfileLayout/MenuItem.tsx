import { Component, JSX } from "solid-js";
import { A } from "@solidjs/router";

interface MenuItemProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const MenuItem: Component<MenuItemProps> = (props) => {
  return (
    <A
      href={props.href}
      class="hover:text-[#1e3a8a] transition-colors cursor-pointer"
      activeClass="bg-gray-300 px-3 py-1.5 rounded font-medium -ml-3">
      {props.children}
    </A>
  );
};

export default MenuItem;
