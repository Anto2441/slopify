import { twMerge } from "tailwind-merge";

interface PaperProps {
  /** The content to be displayed inside the Paper */
  children: React.ReactNode;
  /** Additional CSS class names for styling */
  className?: string;
  /** The elevation level of the Paper */
  elevation?: 1 | 2;
}

/**
 * Renders a Paper component with the given children, class name, and elevation.
 */
export function Paper({ children, className, elevation = 1 }: PaperProps) {
  return (
    <div
      className={twMerge(
        "rounded-lg p-spacing-tighter-2",
        elevation === 1 ? "bg-background-base" : "",
        elevation === 2 ? "bg-background-elevated-base" : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
