import LoginForm from "./LoginForm";

/**
 * Renders the login page with a title, login form, and sign up message.
 */
export default function LoginPage() {
  return (
    <div className="login-page flex flex-col">
      <h1 className="text-center text-5xl font-bold text-white">
        Log in to Slopify
      </h1>

      <LoginForm />

      <hr className="mt-8 w-9/12 self-center border-t border-background-900" />

      <div className=" mx-auto mt-12 flex flex-row">
        <p className="text-white">Don&apos;t have an account ?</p>

        <p className="ml-2 text-white underline">Sign up for Slopify</p>
      </div>
    </div>
  );
}
