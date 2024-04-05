"use client";

import { signOut } from "@/auth/entities/session";
import { DropdownMenuItem } from "@/shared/ui/navigation";

export function SignOutListItem() {
  return (
    <DropdownMenuItem>
      <button onClick={() => signOut()}>Logout</button>
    </DropdownMenuItem>
  );
}
