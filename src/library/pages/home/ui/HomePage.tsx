import { Suspense } from "react";

import { SignOutButton } from "@/auth/features/sign-out";
import { FollowedArtists } from "@/library/features/get-followed-artists";
import { Profil } from "@/library/features/get-profil";
import { UserPlaylists } from "@/library/features/get-user-playlists";
import { Link } from "@/shared/ui/navigation";
import { CardList } from "@/shared/ui/surfaces";

export function HomePage() {
  return (
    <main className="bg-gradient-to-b from-background-tinted-base to-background-base px-spacing-base">
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
          Show all
        </Link>
      </div>

      <CardList />

      <Suspense fallback={<div>Loading user...</div>}>
        <Profil />
      </Suspense>

      <Suspense fallback={<div>Loading followed artists...</div>}>
        <FollowedArtists />
      </Suspense>

      <Suspense fallback={<div>Loading user playlists...</div>}>
        <UserPlaylists />
      </Suspense>

      {/* TODO: remove it, just for development purpose */}
      <SignOutButton size="large" variant="inverted-light" />
    </main>
  );
}
