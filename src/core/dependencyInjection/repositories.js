import ProfileRepository from "../data/ProfileRepository";

function createRepositories(infrastructures) {
  return {
    profile: new ProfileRepository(infrastructures.http, infrastructures.storage)
  };
}

export default createRepositories;
