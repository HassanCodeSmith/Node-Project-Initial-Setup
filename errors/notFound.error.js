import { CustomAPIError } from "./customError.error";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message, 404);
  }
}

export { NotFoundError };
