import { UniqueEntityId } from "./UniqueEntityId";

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly id: UniqueEntityId<string>;
  public readonly props: T;

  constructor(props: T, id?: UniqueEntityId<string>) {
    this.id = id ? id : new UniqueEntityId();
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

    return this.id.equals(candidate.id);
  }
}
