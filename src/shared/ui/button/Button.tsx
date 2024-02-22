import { classNames } from "@/shared/utils";

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
  variant: "primary" | "secondary";

  /** Optional click event handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Renders a button with optional icon.
 */
export default function Button({
  children,
  className = "",
  icon,
  type = "button",
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-full px-32 py-2 text-base font-bold",
        variant === "primary" ? "bg-primary" : "",
        variant === "secondary" ? "bg-white" : "",
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}

      {icon && (
        <div className="-mr-0.5 ml-2 h-4 w-4" aria-hidden="true">
          {icon}
        </div>
      )}
    </button>
  );
}
