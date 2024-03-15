import { Link } from "@/shared/ui";
import { CardList } from "@/shared/ui/surfaces/CardList/CardList";

export function HomePage() {
  return (
    <main className="mt-spacing-tighter-2 bg-gradient-to-b from-background-tinted-base to-background-base px-[20px]">
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
    </main>
  );
}
