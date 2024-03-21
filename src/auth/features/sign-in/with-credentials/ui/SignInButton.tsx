"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/shared/ui/inputs";

interface SignInButtonProps
  extends Pick<
    React.ComponentPropsWithRef<typeof Button>,
    "className" | "size" | "variant"
  > {}

/**
 * Renders a button that, when clicked, triggers the form submission event.
 */
export function SignInButton(props: SignInButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" withFocusRing {...props}>
      Log In
    </Button>
  );
}
