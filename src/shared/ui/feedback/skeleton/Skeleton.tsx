import { twMerge } from "tailwind-merge";

interface SkeletonProps {
  /**
   * Class name to apply to the skeleton element.
   *
   * This can be used to override the default styles of the skeleton component,
   * or to apply additional styles.
   */
  className?: string;
}

/**
 * Renders a skeleton component with a background color and animation.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge(
        "animate-pulse bg-background-tinted-highlight",
        className,
      )}
    />
  );
}
