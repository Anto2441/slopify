import { SignInForm } from "../../../widgets/sign-in-form";

/**
 * Renders the login page with a title, login form, and sign up message.
 */
export function SignInPage() {
  return (
    <div className="login-page flex flex-col">
      <h1 className="text-center text-5xl font-extrabold">Log in to Slopify</h1>

      <SignInForm />

      <hr className="mt-8 w-9/12 self-center border-t border-neutral-900" />

      <div className=" mx-auto mt-12 flex flex-row">
        <p className="text-white">Don&apos;t have an account ?</p>

        <p className="ml-2 text-white underline">Sign up for Slopify</p>
      </div>
    </div>
  );
}
