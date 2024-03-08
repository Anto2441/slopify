import NextLink from "next/link";
import React from "react";

/**
 * Renders a link with the specified properties.
 * @see https://nextjs.org/docs/pages/api-reference/components/link
 */
export const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(function Link({ children, ...props }, ref) {
  return (
    <NextLink {...props} ref={ref}>
      {children}
    </NextLink>
  );
});
