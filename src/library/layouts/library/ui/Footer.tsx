import { SignUpBanner } from "@/auth/widgets/sign-up-banner";
import { Player } from "@/player/widgets/player";
import { getServerSession } from "@/shared/auth/next";

export async function Footer() {
  const session = await getServerSession();

  return session ? <Player /> : <SignUpBanner />;
}
