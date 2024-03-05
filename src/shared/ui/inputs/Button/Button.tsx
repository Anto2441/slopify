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
  theme?: "accent" | "inverted-light";

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
  theme,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "min-h-control-size-smaller rounded-full bg-background-base px-spacing-looser-2 py-spacing-tighter-2 font-bold leading-tight text-text-base hover:bg-background-highlight active:bg-background-press",
        theme === "accent" && "theme-accent",
        theme === "inverted-light" && "theme-inverted-light",
        !theme &&
          "bg-transparent text-text-subdued hover:bg-transparent hover:text-text-base",
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
