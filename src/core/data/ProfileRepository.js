import { API_URL } from "../common/constants/api";

export default class ProfileRepository {
  constructor(http, storage) {
    this._http = http;
    this._storage = storage;
  }

  async getMyProfile() {
    const response = await this._http.request({
      url: API_URL.PROFILE_ME,
      method: "GET",
      withAuth: true,
      data: {}
    });

    console.log("XXXXX 2 response", response);

    // convert response
    // update to use Either<Left, Right>
    // if (response.error) {
    //   return {
    //     error: "error-code",
    //     errorMessage: ""
    //   };
    // }

    // return {
    //   displayName: response.name,
    //   activeAvatar: response.activeAvatar
    // };
    return response;
  }

  async getProfile(parameter) {
    const { id } = parameter;
    const result = await this._http.request({
      url: `${API_URL.PROFILE}/${id}`,
      method: "GET",
      withAuth: true,
      data: {}
    });

    return result;
  }
}
