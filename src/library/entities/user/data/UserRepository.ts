import { type HttpResponse } from "@/shared/http";
import { SpotifyWebApi, type ISpotifyWebApi } from "@/shared/spotify/web-api";

interface CurrentUserDto {
  display_name: string;
  id: string;
}

interface FollowedArtistsDto {
  artists: { items: { name: string }[] };
}

interface UserPlaylistsDto {
  items: {
    owner: { display_name: string };
    images: [{ height: number; width: number; url: string }];
    name: string;
    type: string;
  }[];
}

export interface IUserRepository {
  getProfil(): Promise<HttpResponse<CurrentUserDto>>;
  getFollowedArtists(): Promise<HttpResponse<FollowedArtistsDto>>;
  getPlaylistsByUsername(
    username: string,
  ): Promise<HttpResponse<UserPlaylistsDto>>;
}

interface UserRepositoryDeps {
  spotifyWebApi: ISpotifyWebApi;
}

export class UserRepository implements IUserRepository {
  constructor(
    private readonly deps: UserRepositoryDeps = {
      spotifyWebApi: new SpotifyWebApi(),
    },
  ) {}

  async getProfil() {
    return this.deps.spotifyWebApi.get<CurrentUserDto>("/me");
  }

  async getFollowedArtists() {
    return this.deps.spotifyWebApi.get<FollowedArtistsDto>(
      "/me/following?type=artist",
    );
  }

  async getPlaylistsByUsername(username: string) {
    return this.deps.spotifyWebApi.get<UserPlaylistsDto>(
      `/users/${username}/playlists`,
    );
  }
}
