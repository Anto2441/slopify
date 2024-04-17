import { Link } from "@/shared/ui/navigation";

import { signInRoute } from "../route";

interface SignInLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> {}

export function SignInLink(props: SignInLinkProps) {
  return <Link {...props} href={signInRoute()} />;
}
