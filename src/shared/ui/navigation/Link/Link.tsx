import { cva, type VariantProps } from "cva";
import NextLink from "next/link";
import React from "react";

import { focusVisibleRing } from "../../utils";

const linkVariants = cva({
  base: `inline-flex items-center gap-spacing-tighter-4 align-baseline [&>svg]:text-[1.3em] ${focusVisibleRing()}`,

  defaultVariants: {
    underline: `none`,
    variant: `inherit`,
  },

  variants: {
    underline: {
      hover: `hover:underline`,
      none: ``,
    },

    variant: {
      base: ``,
      active: `hover:bg-background-tinted-base active:bg-background-tinted-base`,
      inherit: ``,
      muted: `text-color-subdued hover:text-color-base`,
    },
  },
});

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof linkVariants>;

/**
 * Renders a link with the specified properties.
 * @see https://nextjs.org/docs/pages/api-reference/components/link
 */
export const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  LinkProps
>(function Link({ children, className, underline, variant, ...props }, ref) {
  return (
    <NextLink
      {...props}
      className={linkVariants({ className, underline, variant })}
      ref={ref}
    >
      {children}
    </NextLink>
  );
});
