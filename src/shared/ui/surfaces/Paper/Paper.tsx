import { cva, type VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

const paperVariants = cva({
  base: `rounded-lg p-spacing-tighter-2`,

  defaultVariants: {
    variant: "flat",
  },

  variants: {
    variant: {
      flat: `bg-background-base`,
      tinted: `bg-background-tinted-base hover:bg-background-tinted-highlight`,
      elevated: `bg-background-elevated-base`,
    },
  },
});

interface PaperProps extends VariantProps<typeof paperVariants> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders a Paper component with the given children, class name, and elevation.
 */
export function Paper({ children, className, variant }: PaperProps) {
  return (
    <div className={twMerge(paperVariants({ className, variant }))}>
      {children}
    </div>
  );
}
