import { v4 } from "uuid";

export class UniqueEntityId {
  public readonly value: string;
  constructor(value?: string) {
    this.value = value ? value : v4();
  }

  equals(uuid: UniqueEntityId): boolean {
    return uuid.value === this.value;
  }
}
