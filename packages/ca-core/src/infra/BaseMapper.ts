export abstract class BaseMapper<T, U = any> {
  protected abstract toPersistence(entity: T): U;
  protected abstract toDomain(raw: any): T;
}
