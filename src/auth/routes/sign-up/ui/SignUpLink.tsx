import { Link } from "@/shared/ui/navigation";

import { signUpRoute } from "../route";

interface SignUpLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> {}

export function SignUpLink(props: SignUpLinkProps) {
  return <Link {...props} href={signUpRoute()} />;
}
