"use client";

import { FaSpotify } from "react-icons/fa6";

import { signIn } from "@/auth/entities/session";
import { Button } from "@/shared/ui/inputs";

interface SignInWithSpotifyButtonProps
  extends Pick<
    React.ComponentPropsWithoutRef<typeof Button>,
    "className" | "size" | "variant"
  > {}

/**
 * A button component that triggers the Spotify sign-in flow (OAuth).
 */
export function SignInWithSpotifyButton(props: SignInWithSpotifyButtonProps) {
  return (
    <Button
      type="button"
      withFocusRing
      onClick={() => signIn("spotify")}
      {...props}
    >
      <FaSpotify /> Continue with Spotify
    </Button>
  );
}
