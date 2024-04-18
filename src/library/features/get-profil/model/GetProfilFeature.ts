import { IUserRepository, UserRepository } from "@/library/entities/user";

interface GetProfilFeatureDeps {
  userRepository: IUserRepository;
}

export class GetProfilFeature {
  constructor(
    private readonly deps: GetProfilFeatureDeps = {
      userRepository: new UserRepository(),
    },
  ) {}
  execute() {
    return this.deps.userRepository.getProfil();
  }
}
