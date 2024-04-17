import { Link } from "@/shared/ui/navigation";

import { homeRoute } from "../route";

interface HomeLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> {}

export function HomeLink(props: HomeLinkProps) {
  return <Link {...props} href={homeRoute()} />;
}
