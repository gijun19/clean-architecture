export abstract class BaseRepo<T> {
  protected abstract exists(entity: T): Promise<boolean>;
  protected abstract saveOne(entity: T): Promise<T>;
  protected abstract saveMany(entities: T[]): Promise<T[]>;
}
