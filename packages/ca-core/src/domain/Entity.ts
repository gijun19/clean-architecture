import { UniqueEntityId } from "./UniqueEntityId";

const isEntity = (v: Entity<any>): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly uuid: UniqueEntityId;
  public readonly props: T;

  constructor(props: T, uuid?: UniqueEntityId) {
    this.uuid = uuid ? uuid : new UniqueEntityId();
    this.props = props;
  }

  public equals(candidate?: Entity<T>): boolean {
    if (candidate == null || candidate == undefined) {
      return false;
    }

    if (this === candidate) {
      return true;
    }

    if (!isEntity(candidate)) {
      return false;
    }

    return this.uuid.equals(candidate.uuid);
  }
}
