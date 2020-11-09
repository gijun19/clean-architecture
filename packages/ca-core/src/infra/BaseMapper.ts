export abstract class BaseMapper<DomainEntity, DatabaseModel = any> {
  protected abstract toDb(entity: DomainEntity): Promise<DatabaseModel>;
  protected abstract toDomain(model: DatabaseModel): Promise<DomainEntity>;
}
