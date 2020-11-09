export abstract class BaseMapper<DomainEntity, DatabaseModel = any> {
  protected abstract toDb(entity: DomainEntity): DatabaseModel;
  protected abstract toDomain(model: DatabaseModel): DomainEntity;
}
