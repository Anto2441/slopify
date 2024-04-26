import { UserRepository, type IUserRepository } from "@/library/entities/user";

interface GetFollowedArtistsFeatureDeps {
  userRepository: IUserRepository;
}

export class GetUserPlaylistsFeature {
  constructor(
    private readonly deps: GetFollowedArtistsFeatureDeps = {
      userRepository: new UserRepository(),
    },
  ) {}
  execute(username: string) {
    return this.deps.userRepository.getPlaylistsByUsername(username);
  }
}
