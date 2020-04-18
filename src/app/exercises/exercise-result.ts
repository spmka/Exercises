import { Exercise } from './exercise';
import { Result } from '../util/result';

export class ExerciseResult extends Exercise {
  public constructor() {
    super();
    this.name = 'Result';
    this.question = 'What is logged when you call the run() method?';
    this.info = `Typescript has no keyword throws so that it is not possible to see if a method will possibly thhrow an error.
Using Result as a return type for methods that can produce and error solves this problem 
because Result can be either the expected valueor an error. 
Now you can see from the method signature that an error is possible.
Using an Error or an Error child class gives us the stack trace as an additional information.

==> Don't use strings as errors, always an Error or a child class. 

Here is the Result class we use:

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
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `class SpecialError extends Error {
}
    
public run() {
  const result1 = this.doItOk();
  this.doLog(result1.isOk() ? result1.getValue() : result1.getError());
  const result2 = this.doSomeOk();
  this.doLog(result2.isOk() ? result2.getValue() : result2.getError());
  const result3 = this.doItWithError();
  this.doLog(result3.isOk() ? result3.getValue() : result3.getError().message)
  this.doLog(result3.isOk() ? result3.getValue() : result3.getError().stack);
}

private doItOk(): Result<string, Error> {
  // ... do some work, no error
  return Result.ok('everything worked');
}

private doSomeOk(): Result<Array<number>, Error> {
  // ... do some work, no error
  return Result.ok([1, 2, 3, 4, 5]);
}

private doItWithError(): Result<string, SpecialError> {
  // ... do some work, error occurs
  return Result.err(new SpecialError('could not do it'));
}
`;
    this.solutionUrl = null;
    this.solution = `run the excercise please

==> Did you see that doItWithError() uses our SpecialError class, a child class of Error?
==> Keep in mind with this solution the method signature shows possible error 
    and we have the stack trace for each error     
`;
  }

  public run() {
    const result1 = this.doItOk();
    this.doLog(result1.isOk() ? result1.getValue() : result1.getError());
    const result2 = this.doSomeOk();
    this.doLog(result2.isOk() ? result2.getValue() : result2.getError());
    const result3 = this.doItWithError();
    this.doLog(result3.isOk() ? result3.getValue() : result3.getError().message);
    this.doLog(result3.isOk() ? result3.getValue() : result3.getError().stack);
  }

  private doItOk(): Result<string, Error> {
    // ... do some work, no error
    return Result.ok('everything worked');
  }

  private doSomeOk(): Result<Array<number>, Error> {
    // ... do some work, no error
    return Result.ok([1, 2, 3, 4, 5]);
  }

  private doItWithError(): Result<string, SpecialError> {
    // ... do some work, error occurs
    return Result.err(new SpecialError('could not do it'));
  }
}

class SpecialError extends Error {}
