class GetMyProfileUseCase {
  constructor(profileRepository, presenter) {
    this._profileRepository = profileRepository;
    this._presenter = presenter;
  }

  async getMyProfile() {
    // handle logic here ...
    const response = await this._profileRepository.getMyProfile();
    return this._presenter(response, result => ({
      displayName: result.name,
      activeAvatar: result.activeAvatar
    }));
  }

  // async updateMyProfile(parameters) {}
}

export default GetMyProfileUseCase;
