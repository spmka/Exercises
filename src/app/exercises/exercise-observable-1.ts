import { Exercise } from './exercise';
import { from, Observable } from 'rxjs';

export class ExerciseObservable1 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Observable-1';
    this.question = 'What is logged when you call the run() method?';
    this.info = `Observables and the rxjs library (operators) are widely used in angular.
`;
    this.infoUrls = [
      'https://rxjs-dev.firebaseapp.com/guide/overview',
      'https://rxjs-dev.firebaseapp.com/guide/observable',
      'https://rxjs-dev.firebaseapp.com/api/operators'
    ];
    this.infoUrlNames = ['rxjs overview', 'rxjs observables', 'rxjs operators'];
    this.code = `public run() {
  const observable1: Observable<number> = new Observable<number>(subscriber => {
    this.doLog('sending value 1');
    subscriber.next(1);
    this.doLog('sending value 2');
    subscriber.next(2);
    this.doLog('sending value 3');
    subscriber.next(3);
    subscriber.complete();
  });

  const observable2: Observable<number> = from([4, 5, 6]);
  observable2.subscribe((value: number) => this.doLog(value));

  observable1.subscribe((value: number) => this.doLog(value));

  const observable3: Observable<number> = new Observable<number>(subscriber => {
    this.doLog('sending value 7');
    subscriber.next(7);
    this.doLog('sending value 8');
    subscriber.next(8);
  });
  const promise1: Promise<number> = observable3.toPromise();
  this.doLog('toPromise() done for promise1');
  promise1.then(value => this.doLog(value));

  const observable4: Observable<number> = new Observable<number>(subscriber => {
    this.doLog('sending value 9');
    subscriber.next(9);
    this.doLog('sending value 10');
    subscriber.next(10);
    subscriber.complete();
  });
  const promise2: Promise<number> = observable4.toPromise();
  this.doLog('toPromise() done for promise2');
  promise2.then(value => this.doLog(value));
}
`;
    this.solutionUrl = null;
    this.solution = `4
5
6
sending value 1
1
sending value 2
2
sending value 3
3
sending value 7
sending value 8
toPromise() done for promise1
sending value 9
sending value 10
toPromise() done for promise2
10

==> We see "sending value 1" after 4, 5, 6 because the code is only executed after a subscribe() to the Observable.
==> Also http calls are executed when a subscribe() to them happens, or when they are converted to a Promise 
    via toPromise() (see also the code below).
==> The promise1 does not resolve because the observable3 is not complete (no complete() call).
==> the promise2 does resolve, but we only get the last value!
`;
  }

  public run() {
    const observable1: Observable<number> = new Observable<number>(subscriber => {
      this.doLog('sending value 1');
      subscriber.next(1);
      this.doLog('sending value 2');
      subscriber.next(2);
      this.doLog('sending value 3');
      subscriber.next(3);
      subscriber.complete();
    });

    const observable2: Observable<number> = from([4, 5, 6]);
    observable2.subscribe((value: number) => this.doLog(value));

    observable1.subscribe((value: number) => this.doLog(value));

    const observable3: Observable<number> = new Observable<number>(subscriber => {
      this.doLog('sending value 7');
      subscriber.next(7);
      this.doLog('sending value 8');
      subscriber.next(8);
    });
    const promise1: Promise<number> = observable3.toPromise();
    this.doLog('toPromise() done for promise1');
    promise1.then(value => this.doLog(value));

    const observable4: Observable<number> = new Observable<number>(subscriber => {
      this.doLog('sending value 9');
      subscriber.next(9);
      this.doLog('sending value 10');
      subscriber.next(10);
      subscriber.complete();
    });
    const promise2: Promise<number> = observable4.toPromise();
    this.doLog('toPromise() done for promise2');
    promise2.then(value => this.doLog(value));
  }
}
