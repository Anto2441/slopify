import { cva, type VariantProps } from "cva";
import React from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../../data-display";
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
      accent: `theme-accent bg-background-base text-color-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
      ghost: `bg-transparent text-color-subdued hover:bg-background-highlight hover:text-color-base active:bg-background-tinted-press`,
      text: `bg-transparent text-color-subdued hover:text-color-base active:text-color-subdued`,
      tinted: `bg-background-tinted-base hover:bg-background-tinted-highlight hover:text-color-base active:bg-background-tinted-press`,
      "over-media": `theme-over-media bg-background-base text-color-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
      "inverted-dark": `theme-inverted-dark bg-background-base text-color-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
      "inverted-light": `theme-inverted-light bg-background-base text-color-base hover:scale-105 hover:bg-background-highlight active:scale-100 active:bg-background-press`,
    },
  },
});

type IconButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof iconButtonVariants> & {
    /**
     * The text content of the tooltip displayed on hover. It is mandatory for accessibility reasons.
     */
    tooltip: React.ReactNode;
  };

/**
 * Renders an icon button with a tooltip displayed on hover. The `tooltip` prop is mandatory
 * for accessibility reasons.
 *
 * It provides a text alternative for the icon that is not perceivable by sight.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className, size, tooltip, variant, ...props }, ref) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>

        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    );
  },
);
