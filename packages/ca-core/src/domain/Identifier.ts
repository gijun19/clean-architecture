export class Identifier {
  constructor(private value: string) {
    this.value = value;
  }

  equals(id?: Identifier): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toString() === this.value;
  }

  toString(): string {
    return String(this.value);
  }
}
