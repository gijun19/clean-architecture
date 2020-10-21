import { v4 as uuid } from "uuid";
import { Identifier } from "./Identifier";

// TODO: add support for different types of identifiers

export class UniqueEntityId<T> extends Identifier {
  constructor(id?: string | T) {
    if (id) {
      super(id as string);
    } else {
      super(uuid() as string);
    }
  }
}
