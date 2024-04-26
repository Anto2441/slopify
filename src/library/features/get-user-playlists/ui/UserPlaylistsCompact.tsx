import { TiPin } from "react-icons/ti";

import { Link } from "@/shared/ui/navigation";
import { GetUserPlaylistsFeature } from "../model/GetUserPlaylistsFeature";

export async function UserPlaylistsCompact() {
  const getUserPlaylistsFeature = new GetUserPlaylistsFeature();

  const { data, error } = await getUserPlaylistsFeature.execute("deejooz");

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Link className="flex w-full rounded-md" href={""} variant="active">
        <TiPin className="text-color-positive" size={18} />
        <p className="truncate font-semibold">Liked titles</p>
        <p className="text-color-subdued">•</p>
        <p className="truncate text-font-size-smaller text-color-subdued">
          Playlist
        </p>
      </Link>

      {data.items.map((item) => {
        return (
          <Link
            className="flex w-full gap-spacing-tighter-4 rounded-md p-spacing-tighter-5"
            key={item.name}
            href={""}
            variant="active"
          >
            <p className="truncate font-semibold">{item.name}</p>
            <p className="text-color-subdued">•</p>
            <p className="truncate text-font-size-smaller text-color-subdued">
              {item.type}
            </p>
          </Link>
        );
      })}
    </>
  );
}
