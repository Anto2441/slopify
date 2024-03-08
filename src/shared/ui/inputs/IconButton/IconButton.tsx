import { cva, type VariantProps } from "cva";
import React from "react";

import { disabledInput, focusVisibleRing } from "../../utils";

const iconButtonVariants = cva({
  base: `rounded-full transition-all duration-200 [&>svg]:text-[1.3em] ${focusVisibleRing()}`,

  defaultVariants: {
    disabled: false,
    size: "medium",
    variant: "text",
  },

  variants: {
    disabled: {
      true: disabledInput(),
    },

    size: {
      small: `p-spacing-tighter-2`,
      medium: `p-spacing-tighter`,
      large: `p-spacing-base`,
    },

    variant: {
      accent: `theme-accent bg-background-base text-text-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
      ghost: `bg-transparent text-text-subdued hover:bg-background-highlight hover:text-text-base active:bg-background-tinted-press`,
      text: `bg-transparent text-text-subdued hover:text-text-base active:text-text-subdued`,
      tinted: `bg-background-tinted-base hover:bg-background-tinted-highlight hover:text-text-base active:bg-background-tinted-press`,
      "over-media": `theme-over-media bg-background-base text-text-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
      "inverted-dark": `theme-inverted-dark bg-background-base text-text-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
      "inverted-light": `theme-inverted-light bg-background-base text-text-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
    },
  },
});

type IconButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof iconButtonVariants>;

/**
 * Renders an icon button
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className, size, variant, ...props }, ref) {
    return (
      <button
        {...props}
        className={iconButtonVariants({
          className,
          disabled: props.disabled,
          size,
          variant,
        })}
        ref={ref}
      />
    );
  },
);
