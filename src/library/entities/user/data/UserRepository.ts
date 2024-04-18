import { ISpotifyWebApi, SpotifyWebApi } from "@/shared/spotify/web-api";
import { HttpResponse } from "@/shared/spotify/web-api/types";

interface CurrentUserDto {
  display_name: string;
  id: string;
}

interface FollowedArtistsDto {
  artists: { items: { name: string }[] };
}

export interface IUserRepository {
  getProfil(): Promise<HttpResponse<CurrentUserDto>>;
  getFollowedArtists(): Promise<HttpResponse<FollowedArtistsDto>>;
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
}
