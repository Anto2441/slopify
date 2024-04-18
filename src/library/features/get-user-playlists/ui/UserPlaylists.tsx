import { GetUserPlaylistsFeature } from "../model/GetUserPlaylistsFeature";

export async function UserPlaylists() {
  const getUserPlaylistsFeature = new GetUserPlaylistsFeature();

  const { data, error } = await getUserPlaylistsFeature.execute();
  console.log("dataPlaylists", data);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h1>User playlists</h1>
      <p>{data.items[0].name}</p>
    </>
  );
}
