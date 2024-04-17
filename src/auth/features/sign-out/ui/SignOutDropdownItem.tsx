"use client";

import { DropdownMenuItem } from "@/shared/ui/navigation";

import { signOut } from "../../../entities/session";

export function SignOutDropdownItem() {
  return (
    <DropdownMenuItem>
      <button onClick={() => signOut()}>Logout</button>
    </DropdownMenuItem>
  );
}
