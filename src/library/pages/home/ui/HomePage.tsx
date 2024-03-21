import { SignOutButton } from "@/auth/features/sign-out";
import { Link } from "@/shared/ui/navigation";
import { CardList } from "@/shared/ui/surfaces";

export function HomePage() {
  return (
    <main className="mt-spacing-tighter-2 bg-gradient-to-b from-background-tinted-base to-background-base px-spacing-base">
      <div className="flex justify-between">
        <Link
          href="#"
          underline="hover"
          className="my-spacing-tighter-5 text-font-size-larger font-bold"
        >
          Playlists Slopify
        </Link>
        <Link
          href="#"
          className="text-font-size-smaller font-bold text-color-subdued"
          underline="hover"
        >
          Tout afficher
        </Link>
      </div>

      <CardList />

      {/* TODO: remove it, just for development purpose */}
      <SignOutButton size="large" variant="inverted-light" />
    </main>
  );
}
