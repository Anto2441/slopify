import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Renders a basic html input component
 */

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, onChange, placeholder, type, ...props }, ref) {
    return (
      <input
        {...props}
        ref={ref}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    );
  },
);
