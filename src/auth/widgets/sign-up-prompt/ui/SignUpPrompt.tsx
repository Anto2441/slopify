import { SignUpLink } from "../../../routes/sign-up";

export function SignUpPrompt() {
  return (
    <div className="py-spacing-base text-center font-semibold">
      <span className="mb-spacing-tighter-4 block text-color-subdued md:mb-0 md:inline">
        Don&apos;t have an account?
      </span>

      <SignUpLink className="ml-spacing-tighter-2 text-center text-color-base underline hover:text-color-bright-accent">
        Sign up for Slopify
      </SignUpLink>
    </div>
  );
}
