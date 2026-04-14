import { Component, JSX, splitProps } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "class", "children"]);

  const baseClass = local.variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <button 
      class={`${baseClass} ${local.class || ""}`} 
      {...others}
    >
      {local.children}
    </button>
  );
};
