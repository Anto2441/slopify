"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { twJoin } from "tailwind-merge";

/**
 * The `Tooltip` component is a wrapper around the `TooltipPrimitive.Root` component provided by the Radix UI Tooltip.
 *
 * The `Tooltip` component is used to define the behavior and appearance of a tooltip in your application.
 * It is a generic container that can be customized using CSS-in-JS libraries like Tailwind CSS or CSS modules.
 *
 * @see https://www.radix-ui.com/primitives/docs/components/tooltip#root
 */
export function Tooltip(
  props: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props} />
    </TooltipPrimitive.Provider>
  );
}

/**
 * TooltipTrigger component is a wrapper around the `TooltipPrimitive.Trigger` component provided by the Radix UI Tooltip.
 *
 * It renders the trigger as a child of the target element by default.
 *
 * @see https://www.radix-ui.com/primitives/docs/components/tooltip#trigger
 */
export const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(function TooltipTrigger(props, ref) {
  return <TooltipPrimitive.Trigger {...props} ref={ref} />;
});

/**
 * The content component for a Tooltip.
 *
 * This is a wrapper around the `TooltipPrimitive.Content` component provided by the Radix UI Tooltip.
 *
 * @see https://www.radix-ui.com/primitives/docs/components/tooltip#content
 */
export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(function TooltipContent({ className, sideOffset = 4, ...props }, ref) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        {...props}
        className={twJoin(
          "rounded bg-background-elevated-base px-spacing-tighter-2 py-spacing-tighter-4 text-font-size-smaller text-color-base shadow-xl",
          className,
        )}
        ref={ref}
        sideOffset={sideOffset}
      />
    </TooltipPrimitive.Portal>
  );
});
