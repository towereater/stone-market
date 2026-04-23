import { Component, JSX, Show, splitProps } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cancel";
  isLoading?: boolean;
}

export const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "class", "children", "isLoading"]);

  const baseClass = local.variant === "secondary" ? "btn-secondary" : local.variant === "cancel" ? "btn-cancel" : "btn-primary";

  return (
    <button 
      class={`${baseClass} flex items-center justify-center h-8 ${local.class || ""} ${local.isLoading ? "opacity-70 cursor-not-allowed" : ""}`} 
      disabled={local.isLoading || others.disabled}
      {...others}
    >
      <Show when={local.isLoading}>
        <svg class="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </Show>
      {local.children}
    </button>
  );
};
