"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import React from "react";
import { twJoin } from "tailwind-merge";

import { disabledInput, focusRing } from "../../utils";

/**
 * A switch component that is styled according to the [Radix UI](https://radix-ui.com) design system.
 *
 * This is a wrapper around Radix UI.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/switch
 *
 * The switch has built-in styles for the enabled and disabled states. The switch will also get a focus ring when it is focused.
 *
 * You can use the `checked` prop to set the initial state of the switch, or you can use the `defaultChecked` prop to set the initial state if you don't want to maintain the state of the switch yourself.
 *
 * The `onCheckedChange` prop can be used to listen for changes to the switch's checked state. This prop is only necessary if you want to use the switch in a controlled manner. If you don't provide this prop, the switch will be used in an uncontrolled manner.
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(function Switch({ className, ...switchProps }, ref) {
  return (
    <SwitchPrimitives.Root
      className={twJoin(
        `inline-flex h-4 w-7 translate-y-0.5 cursor-default items-center rounded-full transition-colors duration-200 ease-in-out data-[state=checked]:bg-essential-bright-accent data-[state=unchecked]:bg-essential-subdued`,
        focusRing(),
        disabledInput(),
        className,
      )}
      {...switchProps}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={twJoin(
          "pointer-events-none size-3 transform rounded-full bg-black transition-transform duration-200 ease-in-out will-change-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0.5",
        )}
      />
    </SwitchPrimitives.Root>
  );
});
