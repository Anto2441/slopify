import { GetFollowedArtistsFeature } from "../model/GetFollowedArtists";

export async function FollowedArtists() {
  const getFollowedArtistsFeature = new GetFollowedArtistsFeature();

  const { data, error } = await getFollowedArtistsFeature.execute();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h1>Followed artists</h1>
      <p>{data.artists.items[0].name}</p>
      <br />
    </>
  );
}
