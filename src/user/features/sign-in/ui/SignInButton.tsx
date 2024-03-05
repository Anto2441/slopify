"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/shared/ui";

interface SignInButtonProps {
  /** Additional CSS classes to apply to the button */
  className?: string;
}
export function SignInButton({ className }: SignInButtonProps) {
  const { pending } = useFormStatus();

  return (
    // TODO: Update Button to use all props of native <button /> element
    <Button className={className} type="submit" theme="accent">
      {pending ? "Log In…" : "Log In"}
    </Button>
  );
}
