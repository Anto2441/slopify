import { IUserRepository, UserRepository } from "@/library/entities/user";

interface GetFollowedArtistsFeatureDeps {
  userRepository: IUserRepository;
}

export class GetFollowedArtistsFeature {
  constructor(
    private readonly deps: GetFollowedArtistsFeatureDeps = {
      userRepository: new UserRepository(),
    },
  ) {}

  execute() {
    return this.deps.userRepository.getFollowedArtists();
  }
}
