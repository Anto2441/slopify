import { twJoin } from "tailwind-merge";

interface IconButtonProps {
  /** Additional CSS classes to apply to the button */
  className?: string;

  /** Icon to display */
  icon: React.ReactNode;

  /** Optional click event handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Renders a icon button
 */
export function IconButton({ className = "", icon, onClick }: IconButtonProps) {
  return (
    <button
      className={twJoin(className, "rounded-full")}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
