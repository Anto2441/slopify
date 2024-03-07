import { cva, type VariantProps } from "cva";

import { Image } from "../Image/Image";

const slopifyLogoVariants = cva({
  base: `flex items-center gap-spacing-tighter-4 font-bold text-text-base`,

  defaultVariants: {
    size: "medium",
  },

  variants: {
    size: {
      medium: `text-font-size-base`,
      large: `text-font-size-larger`,
    },
  },
});

interface SlopifyLogoProps extends VariantProps<typeof slopifyLogoVariants> {
  /**
   * Class name to add to the component
   */
  className?: string;
}

/**
 * Displays the Slopify logo
 */
export function SlopifyLogo({ className, size }: SlopifyLogoProps) {
  return (
    <div className={slopifyLogoVariants({ className, size })}>
      <Image
        width={40}
        height={40}
        style={{ width: "1.5em" }}
        src="/logo.png"
        alt="Slopify logo"
      />

      <span>Slopify</span>
    </div>
  );
}
