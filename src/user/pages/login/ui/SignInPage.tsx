import { SignInForm } from "../../../widgets/sign-in-form";

/**
 * Renders the login page with a title, login form, and sign up message.
 */
export function SignInPage() {
  return (
    <div className="md:mx-auto md:w-9/12">
      <h1 className="text-font-size-larger-3 font-extrabold md:text-center">
        Log in to Slopify
      </h1>

      <SignInForm />

      <hr className="hidden md:my-spacing-looser md:block md:border-t md:border-white/10" />

      <div className="py-spacing-base text-center font-semibold">
        <span className="mb-spacing-tighter-4 block text-text-subdued md:mb-0 md:inline">
          Don&apos;t have an account?
        </span>

        <a
          href="#"
          className="ml-spacing-tighter-2 text-center text-text-base underline"
        >
          Sign up for Slopify
        </a>
      </div>
    </div>
  );
}
