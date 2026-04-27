import { Component, JSX, splitProps, createUniqueId } from "solid-js";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ["label", "class", "id"]);
  
  const inputId = local.id || createUniqueId();

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

export default Input;
