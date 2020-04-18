export class Result<O, E extends Error> {
  private constructor(private okValue: O, private errorValue: E) {}

  public static ok<O, E extends Error>(okValue: O) {
    return new Result<O, E>(okValue, null);
  }

  public static err<O, E extends Error>(errorValue: E) {
    return new Result<O, E>(null, errorValue);
  }

  public get(handleError: (errorValue: E) => O): O {
    if (this.okValue === null) {
      return handleError(this.errorValue);
    } else {
      return this.okValue;
    }
  }

  public map<T>(mapper: (wrapped: O) => T): Result<T, E> {
    if (this.okValue === null) {
      return Result.err<T, E>(this.errorValue);
    } else {
      return Result.ok<T, E>(mapper(this.okValue));
    }
  }

  public flatMapOk<T>(mapper: (wrapped: O) => T): Result<O, E> {
    if (this.okValue !== null) {
      mapper(this.okValue);
      return this;
    } else {
      return this;
    }
  }

  public flatMapErr<T>(mapper: (wrapped: E) => T): Result<O, E> {
    if (this.errorValue !== null) {
      mapper(this.errorValue);
      return this;
    } else {
      return this;
    }
  }

  public isOk(): boolean {
    return this.okValue !== null;
  }

  public isError(): boolean {
    return this.errorValue !== null;
  }

  public getValue(): O {
    return this.okValue;
  }

  public getError(): E {
    return this.errorValue;
  }
}
