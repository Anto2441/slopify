import { twMerge } from "tailwind-merge";

interface ButtonProps {
  /** The content to be displayed inside the button */
  children: React.ReactNode;

  /** Additional CSS classes to apply to the button */
  className?: string;

  /** Optional icon to display next to the button text */
  icon?: React.ReactNode;

  /** The type attribute for the button element */
  type?: "button" | "submit" | "reset";

  /** The visual style variant of the button */
  variant?: "primary" | "secondary";

  /** Optional click event handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Renders a button with optional icon.
 */
export function Button({
  children,
  className = "",
  icon,
  type = "button",
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-full px-8 py-2 text-base font-bold text-black",
        variant === "primary" ? "bg-accent-500" : "",
        variant === "secondary" ? "bg-white" : "",
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}

      {icon && <div aria-hidden="true">{icon}</div>}
    </button>
  );
}
