"use client";

import { IconButton } from "@/shared/ui/inputs";
import { DropdownMenuTrigger } from "@/shared/ui/navigation";

interface MenuTriggerProps {
  /** The content of the menu trigger. */
  children: React.ReactNode;
}

/**
 * A component that displays the menu trigger of the user dropdown menu.
 * This component is separated from the `UserDropdownMenu` component in order to render it on the client side.
 */
export function MenuTrigger({ children }: MenuTriggerProps) {
  return (
    <DropdownMenuTrigger asChild>
      <IconButton
        tooltip="Settings"
        variant="over-media"
        className="p-spacing-tighter-4"
      >
        {children}
      </IconButton>
    </DropdownMenuTrigger>
  );
}
