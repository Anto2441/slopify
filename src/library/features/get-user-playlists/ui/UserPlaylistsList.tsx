import { TiPin } from "react-icons/ti";

import { Image } from "@/shared/ui/data-display";
import { Link } from "@/shared/ui/navigation";
import { GetUserPlaylistsFeature } from "../model/GetUserPlaylistsFeature";

export async function UserPlaylistsList() {
  const getUserPlaylistsFeature = new GetUserPlaylistsFeature();

  const { data, error } = await getUserPlaylistsFeature.execute("deejooz");

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Link
        className="flex w-full items-center rounded-md p-spacing-tighter-4"
        href={""}
        variant="active"
      >
        <Image
          alt="cover"
          className="mr-spacing-tighter-2 rounded-md"
          src={
            "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84f6fc20d267d4ed3b2e85786d"
          }
          height={48}
          width={48}
        />

        <div className="flex flex-col">
          <p className="text-semibold line-clamp-1">Liked titles</p>

          <div className="flex items-center gap-spacing-tighter-4 text-font-size-smaller font-semibold text-color-subdued">
            <TiPin className="text-color-positive" size={18} />
            <p>Playlist</p>
            <p>•</p>
            <p>500 titles</p>
          </div>
        </div>
      </Link>

      {data.items
        .filter((item) => item.images !== null)
        .map((item) => {
          const firstImage = item.images ? item.images[0] : null;

          return (
            <Link
              className="flex w-full items-center rounded-md p-spacing-tighter-4"
              key={item.name}
              href={""}
              variant="active"
            >
              <Image
                alt="cover"
                className="mr-spacing-tighter-2 rounded-md"
                src={firstImage!.url}
                height={48}
                width={48}
              />

              <div className="flex flex-col">
                <p className="text-semibold line-clamp-1">{item.name}</p>

                <div className="flex gap-spacing-tighter-4 text-font-size-smaller font-semibold text-color-subdued">
                  {item.type}
                  <p className="text-color-subdued">•</p>
                  <p className="text-font-size-smaller text-color-subdued">
                    {item.owner.display_name}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}
