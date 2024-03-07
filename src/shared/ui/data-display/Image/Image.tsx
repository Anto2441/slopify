import NextImage from "next/image";
import React from "react";

/**
 * An image component that uses Next.js's image optimization capabilities.
 *
 * @see https://nextjs.org/docs/basic-features/image-optimization
 * @see https://nextjs.org/docs/basic-features/image-component
 */
export const Image = React.forwardRef<
  React.ElementRef<typeof NextImage>,
  React.ComponentPropsWithoutRef<typeof NextImage>
>(function Image(props, ref) {
  return <NextImage {...props} ref={ref} />;
});
