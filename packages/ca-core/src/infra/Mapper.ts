// TODO Add generic Mapper class

export abstract class Mapper<DomainEntity> {
  protected abstract toDb(entity: DomainEntity): Promise<any> | any;
  protected abstract toDomain(raw: any): Promise<DomainEntity> | DomainEntity;
}
