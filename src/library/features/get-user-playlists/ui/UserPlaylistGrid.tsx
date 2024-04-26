import { Card } from "@/shared/ui/surfaces/Card/Card";
import { TiPin } from "react-icons/ti";
import { GetUserPlaylistsFeature } from "../model/GetUserPlaylistsFeature";

export async function UserPlaylistsGrid() {
  const getUserPlaylistsFeature = new GetUserPlaylistsFeature();

  const { data, error } = await getUserPlaylistsFeature.execute("deejooz");

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-spacing-tighter">
      <li>
        <Card
          pictureUrl="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84f6fc20d267d4ed3b2e85786d"
          pictureSize={150}
          title={
            <div className="flex items-center gap-spacing-tighter-4">
              <TiPin className="text-color-positive" size={18} />
              Liked titles
            </div>
          }
          subtitle="Playlist"
          subtitleBis="500 titles"
          tooltip="Liked titles"
        />
      </li>

      {data.items
        .filter((item) => item.images !== null)
        .map((item) => {
          const firstImage = item.images ? item.images[0] : null;

          return (
            <li key={item.name}>
              <Card
                key={item.name}
                pictureUrl={firstImage!.url}
                pictureSize={150}
                title={item.name}
                subtitle={item.type}
                subtitleBis={item.owner.display_name}
                tooltip={item.name}
              />
            </li>
          );
        })}
    </ul>
  );
}
