import {
  IPlaylistsRepository,
  PlaylistsRepository,
} from "@/library/entities/playlists";

interface GetFollowedArtistsFeatureDeps {
  playlistsRepository: IPlaylistsRepository;
}

export class GetUserPlaylistsFeature {
  constructor(
    private readonly deps: GetFollowedArtistsFeatureDeps = {
      playlistsRepository: new PlaylistsRepository(),
    },
  ) {}
  execute() {
    return this.deps.playlistsRepository.getUserPlaylists();
  }
}
