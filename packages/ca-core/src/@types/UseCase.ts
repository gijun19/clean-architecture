export interface UseCase<T, U> {
  execute(payload?: T): Promise<U> | U;
}
