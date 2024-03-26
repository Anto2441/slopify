import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, onChange, placeholder, type, ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
