export interface BaseRepo<T> {
  exists(t: T): Promise<boolean>;
  save(t: T): Promise<T>;
}
