import { Exercise } from './exercise';

export class ExerciseAsync1 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Async-1';
    this.question = 'What is logged when you call the run() method?';
    this.info = `Event loop and micro tasks as results of promises.
Micro tasks are only executed when the call stack is empty.
In this example the two parts of an expression are evaluated at two different timeslots,
the first part directly and the second part as a micro tast later.
`;
    this.infoUrls = [
      'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await',
      'https://www.youtube.com/watch?v=cCOL7MC4Pl0&list=WL&index=66'
    ];
    this.infoUrlNames = ['What is async await?', 'What is the event loop (Tasks, MikroTasks, Rendering)'];
    this.code = `private x: number;

public run() {
  this.x = 0;
  this.compute();
  this.x += 1;
  this.doLog('run() x = ' + this.x);
}

private async compute() {
  this.x += await 2;
  this.doLog('compute() x = ' + this.x);
}
`;
    this.solutionUrl = null;
    this.solution = `run() x = 1
compute() x = 2

public run() {
  this.x = 0;
  this.compute();  // When we call compute() this.x = 0, see below!
  this.x = this.x + 1;
  this.doLog("run() x = " + this.x);
}
private async compute(): Promise<any> {
  this.x = this.x + Promise.resolve(2);
           // this.x on the right is evaluated to 0 when method compute is called
           // Promise.resolve(2) is evaluated as a micro task after the call stack is empty
           // and this is when the run() method has been completed, also compute is finished after run()!
  this.doLog("compute() x = " + this.x);
};

==> Keep in mind: Global variables and async await may be problematic!';
`;
  }

  public run() {
    this.x = 0;
    this.compute();
    this.x += 1;
    this.doLog('run() x = ' + this.x);
  }

  private async compute() {
    this.x += await 2;
    this.doLog('compute() x = ' + this.x);
  }
}
