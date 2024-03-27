import * as React from "react";
import { twJoin } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Renders a basic html input component
 */

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        {...props}
        ref={ref}
        className={twJoin(
          `block w-full rounded-border-radius-base border border-essential-subdued bg-background-base py-spacing-tighter-2 shadow-essential-base placeholder:text-color-subdued hover:border-essential-base focus:border-essential-base focus:border-white focus:ring-white`,
          className,
        )}
      />
    );
  },
);
