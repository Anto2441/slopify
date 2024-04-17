import { Link } from "@/shared/ui/navigation";

import { searchRoute } from "../route";

interface SearchLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> {}

export function SearchLink(props: SearchLinkProps) {
  return <Link {...props} href={searchRoute()} />;
}
