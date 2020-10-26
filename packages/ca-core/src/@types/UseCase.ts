export interface UseCase<UseCasePayload, UseCaseResult> {
  execute(payload?: UseCasePayload): Promise<UseCaseResult> | UseCaseResult;
}
