/**
 * @param {AxiosRequestConfig} config
 * @returns boolean
 */
function isFormData(config) {
  if ((config.method || "GET").toLocaleUpperCase() === "GET") {
    return false;
  }

  if (!config.headers) {
    return false;
  }

  if (config.headers["Content-Type"] !== "multipart/form-data") {
    return false;
  }

  return true;
}

export default isFormData;
