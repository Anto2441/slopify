import { SignUpBanner } from "@/auth/widgets/sign-up-banner";
import { Player } from "@/player/widgets/player";
import { getServerSession } from "@/shared/auth/next";

/**
 * Renders the footer of the Library layout.
 *
 * Depending on the user's session, it renders either the LibraryPlayer or the SignUpBanner.
 */
export async function Footer() {
  const session = await getServerSession();

  return session ? <Player /> : <SignUpBanner />;
}
