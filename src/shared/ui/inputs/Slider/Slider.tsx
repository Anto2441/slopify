"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { twJoin } from "tailwind-merge";

import { disabledInput } from "../../utils";

/**
 * The Slider component is a customizable slider input that allows the user to select a value from a range of values.
 *
 * This component is built with the Radix UI Slider primitive and provides a thin wrapper around it with some default styles and a more flexible API.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/slider
 */
export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(function Slider({ className, ...props }, ref) {
  return (
    <SliderPrimitive.Root
      {...props}
      ref={ref}
      className={twJoin(
        "group relative flex w-full touch-none select-none items-center",
        className,
      )}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-essential-subdued">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-color-base group-hover:bg-color-bright-accent" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb
        aria-label="Slider’s thumb"
        className={twJoin(
          "block h-4 w-4 cursor-pointer rounded-full bg-color-base opacity-0 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 group-hover:opacity-100",
          disabledInput(),
        )}
      />
    </SliderPrimitive.Root>
  );
});
