import { cva, type VariantProps } from "cva";
import React from "react";

import { disabledInput, focusRing, focusVisibleRing } from "../../utils";

export const buttonVariants = cva({
  base: `inline-flex items-center justify-center gap-spacing-tighter-4 rounded-full text-center font-bold leading-tight transition-all duration-[33ms] hover:scale-105 active:scale-100 [&>svg]:text-[1.3em] ${focusVisibleRing()}`,

  defaultVariants: {
    disabled: false,
    size: "medium",
    variant: "text",
    withFocusRing: false,
  },

  variants: {
    disabled: {
      true: disabledInput(),
    },

    size: {
      medium: `min-h-control-size-smaller px-spacing-base py-spacing-tighter-4 text-font-size-smaller`,
      large: `min-h-control-size-base px-spacing-looser-2 py-spacing-tighter-2`,
    },

    variant: {
      accent: `theme-accent bg-background-base text-text-base hover:bg-background-highlight active:bg-background-press`,
      text: `bg-transparent text-text-subdued hover:text-text-base active:text-text-subdued`,
      "inverted-light": `theme-inverted-light bg-background-base text-text-base hover:bg-background-highlight active:bg-background-press`,
      outlined: `border border-text-subdued bg-transparent text-text-base hover:border-text-base active:border-text-subdued active:text-text-subdued`,
      "over-media": `theme-over-media bg-background-base text-text-base hover:bg-background-highlight active:bg-background-press`,
    },

    withFocusRing: {
      true: focusRing(),
    },
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

/**
 * A button with built-in variants, sizes, and a focus ring, that can be disabled.
 *
 * Use the `variant` prop to change the style of the button.
 * Use the `size` prop to change the size of the button.
 * Use the `withFocusRing` prop to add a focus ring when the button is focused.
 * Use the `disabled` prop to disable the button. When disabled, the button will not be focusable or clickable.
 * All other props are passed through to the underlying `button` element.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, size, variant, withFocusRing, ...buttonProps },
    ref,
  ) {
    return (
      <button
        {...buttonProps}
        className={buttonVariants({
          className,
          disabled: buttonProps.disabled,
          size,
          variant,
          withFocusRing,
        })}
        ref={ref}
      />
    );
  },
);
