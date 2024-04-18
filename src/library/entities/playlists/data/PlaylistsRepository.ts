import { HttpResponse } from "@/shared/http/types";
import { ISpotifyWebApi, SpotifyWebApi } from "@/shared/spotify/web-api";

interface PlaylistsRepositoryDeps {
  spotifyWebApi: ISpotifyWebApi;
}

interface UserPlaylistsDto {
  items: { name: string }[];
}

export interface IPlaylistsRepository {
  getUserPlaylists(): Promise<HttpResponse<UserPlaylistsDto>>;
}

export class PlaylistsRepository implements IPlaylistsRepository {
  constructor(
    private readonly deps: PlaylistsRepositoryDeps = {
      spotifyWebApi: new SpotifyWebApi(),
    },
  ) {}

  async getUserPlaylists() {
    return this.deps.spotifyWebApi.get<UserPlaylistsDto>(
      "/users/deejooz/playlists",
    );
  }
}
