"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { twJoin } from "tailwind-merge";

/**
 * Root component of a dropdown menu.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/dropdown-menu
 */
export const DropdownMenu = DropdownMenuPrimitive.Root;

/**
 * Component that opens the dropdown menu.
 * This component should be used as a trigger for the dropdown menu. When
 * clicked, it will open the dropdown menu.
 */
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * Component that displays the dropdown menu content.
 * This component is opened when the `DropdownMenuTrigger` is clicked.
 */
export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(function DropdownMenuContent(
  { className, align = "end", sideOffset = 8, ...props },
  ref,
) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        {...props}
        align={align}
        sideOffset={sideOffset}
        className={twJoin(
          "min-w-[12.25rem] overflow-hidden rounded-border-radius-base bg-background-elevated-base p-spacing-tighter-4 text-color-base shadow-md",
          className,
        )}
        ref={ref}
      />
    </DropdownMenuPrimitive.Portal>
  );
});

/**
 * Component that renders a single item in the dropdown menu.
 * This component should not be used directly. Instead, use one of the other
 * components that are meant to be used as children of `DropdownMenuContent`.
 */
export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(function DropdownMenuItem({ className, inset, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Item
      {...props}
      className={twJoin(
        "relative flex cursor-default select-none items-center rounded-border-radius-smaller py-spacing-tighter-2 pl-spacing-tighter pr-spacing-tighter-2 text-font-size-smaller outline-none focus:bg-background-tinted-highlight",
        inset && "pl-spacing-looser-2",
        className,
      )}
      ref={ref}
    />
  );
});

/**
 * Component that renders a single checkbox item in the dropdown menu.
 * This component should be used as a child of `DropdownMenuContent`.
 */
export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem(
  { className, children, checked, ...props },
  ref,
) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      {...props}
      className={twJoin(
        "relative flex cursor-default select-none items-center rounded-border-radius-smaller py-spacing-tighter-3 pl-spacing-looser-2 pr-spacing-tighter-2 text-font-size-smaller outline-none focus:text-color-bright-accent",
        className,
      )}
      checked={checked}
      ref={ref}
    >
      <span className="absolute left-spacing-tighter-2 flex h-spacing-base w-spacing-base items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <IoMdCheckmark className="h-spacing-base w-spacing-base" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

/**
 * Component that renders a single label item in the dropdown menu.
 * This component should be used as a child of `DropdownMenuContent`.
 */
export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(function DropdownMenuLabel({ className, inset, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Label
      {...props}
      className={twJoin(
        "px-spacing-tighter-2 py-spacing-tighter-2 text-font-size-smaller",
        inset && "pl-spacing-looser-2",
        className,
      )}
      ref={ref}
    />
  );
});

/**
 * Component that renders a separator item in the dropdown menu.
 * This component should be used as a child of `DropdownMenuContent`.
 */
export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      className={twJoin(
        "border-b border-background-tinted-highlight",
        className,
      )}
      ref={ref}
    />
  );
});
