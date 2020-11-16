import { Result } from "./Result";
import { UseCaseError } from "./UseCaseError";

export class UnexpectedError extends Result<UseCaseError> {
  public constructor(error: UseCaseError) {
    super({ isSuccess: false, error });
  }

  public static create(error: UseCaseError): UnexpectedError {
    return new UnexpectedError(error);
  }
}
