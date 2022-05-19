import GetMyProfileUseCase from "../application/profile/GetMyProfileUseCase";

function createUseCases(repositories, presenters) {
  return {
    profile: {
      getMyProfile: new GetMyProfileUseCase(repositories.profile, presenters.error)
    }
  };
}

export default createUseCases;
