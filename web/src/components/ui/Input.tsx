import { Component, JSX, splitProps } from "solid-js";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ["label", "class", "id"]);
  
  const inputId = local.id || `input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div class="flex flex-col gap-2">
      <label for={inputId} class="form-label">
        {local.label}
      </label>
      <input 
        id={inputId}
        class={`form-input ${local.class || ""}`} 
        {...others} 
      />
    </div>
  );
};
