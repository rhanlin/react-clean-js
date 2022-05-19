import { StatusCode } from "../common/constants/statusCode";

class ErrorPresenter {
  convertErrorToViewMessage(statusCode) {
    switch (statusCode) {
      case StatusCode.success:
        return "成功";
      case StatusCode.system:
        return "系統繁忙中 請稍後再試";
      default:
        return "系統繁忙中 請稍後再試";
    }
  }

  present(data, rightCallback) {
    if (data.error) {
      return {
        ...data,
        errorMessage: this.convertErrorToViewMessage(data.error.statusCode)
      };
    }

    return rightCallback(data);
  }
}

export default ErrorPresenter;
