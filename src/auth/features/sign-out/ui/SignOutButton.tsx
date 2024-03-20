"use client";

import { signOut } from "@/auth/entities/session";
import { Button } from "@/shared/ui";

interface SignOutButtonProps
  extends Pick<
    React.ComponentPropsWithoutRef<typeof Button>,
    "className" | "size" | "variant"
  > {}

/**
 * Renders a button that, when clicked, triggers the sign-out process.
 */
export function SignOutButton(props: SignOutButtonProps) {
  return (
    <Button type="button" withFocusRing onClick={() => signOut()} {...props}>
      Log out
    </Button>
  );
}
