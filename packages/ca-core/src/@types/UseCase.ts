export interface UseCase<T, U> {
  execute(payload?: T): Promise<U>;
  execute(payload?: T): U;
}
