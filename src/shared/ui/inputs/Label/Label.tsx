import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import { twJoin } from "tailwind-merge";

/**
 * A label is a piece of text that is associated with another piece of UI, like an input. It is used to describe the purpose of that input.
 *
 * This is implemented using Radix UI.
 *
 * @see https://radix-ui.com/primitives/docs/components/label
 *
 * When creating a label, it is important to also associate it with the input it is describing using the `htmlFor` prop. This is done by passing the ID of the input as the value of the `htmlFor` prop.
 *
 * It is also important to make sure that the input has a unique ID. The `htmlFor` prop will look for an element with the matching ID, so if there are multiple elements with the same ID, the label will be associated with the wrong element.
 *
 * @see https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-and-controls
 */
export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(function Label({ className, ...props }, ref) {
  return (
    <LabelPrimitive.Root
      {...props}
      ref={ref}
      className={twJoin(`font-semibold text-text-base`, className)}
    />
  );
});
