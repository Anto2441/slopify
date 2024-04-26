import { Suspense } from "react";

import { FollowedArtists } from "@/library/features/get-followed-artists";
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

      <Suspense fallback={<div>Loading followed artists...</div>}>
        <FollowedArtists />
      </Suspense>
    </main>
  );
}
