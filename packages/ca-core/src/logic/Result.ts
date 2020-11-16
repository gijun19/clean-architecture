export interface ResultProps<T> {
  isSuccess: boolean;
  error?: T;
  value?: T;
}

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T | undefined;
  public readonly value: T | undefined;

  public constructor(opts: ResultProps<T>) {
    const { isSuccess, error, value } = opts;
    if (isSuccess && error) {
      throw new Error("A successful result cannot contain an error message.");
    }
    if (!isSuccess && !error) {
      throw new Error("A failed result must contain an error message.");
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;

    if (error) {
      this.error = error;
    }

    if (value) {
      this.value = value;
    }
  }

  public static ok<U>(value?: U): Result<U> {
    return value
      ? new Result<U>({ isSuccess: true, value })
      : new Result<U>({ isSuccess: true });
  }

  public static fail<U>(error: U): Result<U> {
    return new Result<U>({ isSuccess: false, error });
  }
}

export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }
}

export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }
}

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l);
};

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a);
};
