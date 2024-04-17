import { buttonVariants } from "@/shared/ui/inputs";

import { SignUpLink } from "../../../routes/sign-up";

export function SignUpBanner() {
  return (
    <footer className="flex justify-between gap-spacing-looser bg-gradient-to-r from-[#ae2896] to-[#4f9bf4] pb-spacing-tighter-2 pl-spacing-base pr-spacing-looser pt-spacing-tighter">
      <div>
        <p className="text-font-size-smaller font-bold">Preview of Spotify</p>

        <p className="font-semibold">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>

      <SignUpLink
        className={buttonVariants({ size: "large", variant: "inverted-light" })}
      >
        Sign up for free
      </SignUpLink>
    </footer>
  );
}
