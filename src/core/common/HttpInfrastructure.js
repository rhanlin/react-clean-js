import axios from "axios";

import { StatusCode } from "../common/constants/statusCode";
import createFormData from "../common/utils/createFormData";
import isFormData from "../common/utils/isFormData";

class Http {
  static instance = null;
  _token = "";

  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  getAxiosInstance(config) {
    if (!config.baseURL) {
      config.baseURL = process.env.API_URL;
    }

    // 無 headers 時，指定空物件，方便後續新增
    if (!config.headers) {
      config.headers = {};
    }

    if (!config.headers || !config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json;charset=UTF-8";
    }

    if (config.withAuth) {
      if (!this.token) {
        return { statusMessage: "請先登入", statusCode: StatusCode.unauthorized };
      }

      config.headers.authkey = this._token 
    }

    return axios.create(config);
  }

  getRequestConfig(config) {
    if (isFormData(config)) {
      const formDataConfig = {
        ...config,
        data: createFormData(Object.entries(config.data))
      };
      return formDataConfig;
    }

    return config;
  }

  processResponse(response) {
    const { statusCode, statusMessage, result } = response;
    switch (statusCode) {
      case StatusCode.success:
        return response;
      default:
        return { statusCode, statusMessage, result };
    }
  }

  apiCall(config, instance) {
    try {
      return instance(config);
    } catch (reason) {
      const statusMessage = String(reason).toLowerCase();
      if (statusMessage.includes("401")) {
        return { statusCode: StatusCode.tokenCancel, statusMessage };
      } else if (statusMessage.includes("403")) {
        return { statusCode: StatusCode.unauthorized, statusMessage };
      }

      return { statusCode: StatusCode.system, statusMessage };
    }
  }

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  static getInstance() {
    if (!Http.instance) {
      Http.instance = new Http();
    }

    return Http.instance;
  }

  async request(config) {
    const requestConfig = this.getRequestConfig(config);
    const instance = this.getAxiosInstance(config);
    const rowResponse = this.apiCall(requestConfig, instance);
    const response = this.processResponse(rowResponse);
    console.log("XXXX instance request", response);
    
  }
}

export default Http;
