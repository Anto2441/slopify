import { cva, type VariantProps } from "cva";

const paperVariants = cva({
  base: `rounded-lg`,

  defaultVariants: {
    variant: "flat",
    padding: "base",
  },

  variants: {
    variant: {
      elevated: `bg-background-elevated-base`,
      flat: `bg-background-base`,
      tinted: `bg-[#181818] hover:bg-[#282828]`,
    },

    padding: {
      base: `p-spacing-base`,
      looser: `p-spacing-looser`,
      none: `p-0`,
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
export function Paper({ children, className, padding, variant }: PaperProps) {
  return (
    <div className={paperVariants({ className, padding, variant })}>
      {children}
    </div>
  );
}
