import { CustomAPIError } from "./customError.error";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message, 401);
  }
}

export { UnAuthenticatedError };
