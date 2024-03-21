import { SignInWithCredentialsForm } from "../../../features/sign-in/with-credentials";
import { SignInWithSpotifyButton } from "../../../features/sign-in/with-spotify";
import { SignUpPrompt } from "../../../features/sign-up";

/**
 * Renders the login page with a title, Oauth providers (only Spotify),
 * a login form with credentials (email + password), and sign up message.
 */
export function SignInPage() {
  return (
    <main className="md:mx-auto md:w-9/12">
      <h1 className="mb-spacing-looser-3 text-font-size-larger-3 font-extrabold md:text-center">
        Log in to Slopify
      </h1>

      <SignInWithSpotifyButton
        className="w-full"
        size="large"
        variant="outlined"
      />

      <hr className="my-spacing-looser-3 border-t border-white/10" />

      <SignInWithCredentialsForm />

      <hr className="hidden md:my-spacing-looser md:block md:border-t md:border-white/10" />

      <SignUpPrompt />
    </main>
  );
}
