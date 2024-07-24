import { CustomAPIError } from "./customError.error";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message, 400);
  }
}

export { BadRequestError };
