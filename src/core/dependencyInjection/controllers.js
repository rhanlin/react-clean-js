function createControllers(useCases) {
  return {
    profile: {
      getMyProfile: () => {
        console.log("XXX 1", useCases.profile);
        return useCases.profile.getMyProfile.getMyProfile();
      }
    }
  };
}

export default createControllers;
