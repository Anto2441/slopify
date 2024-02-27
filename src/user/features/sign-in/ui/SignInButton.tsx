"use client";

import { twJoin } from "tailwind-merge";
import { Button } from "@/shared/ui";
import { useFormStatus } from "react-dom";

interface SignInButtonProps {
  /** Additional CSS classes to apply to the button */
  className?: string;
}
export function SignInButton({ className }: SignInButtonProps) {
  const { pending } = useFormStatus();

  return (
    // TODO: Update Button to use all props of native <button /> element
    <Button
      className={twJoin(className, "w-full")}
      type="submit"
      variant="primary"
    >
      {pending ? "Log In…" : "Log In"}
    </Button>
  );
}
