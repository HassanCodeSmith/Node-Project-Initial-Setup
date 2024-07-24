import { CustomAPIError } from "./customError.error";

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message, 403);
  }
}

export { ForbiddenError };
