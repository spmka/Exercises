import { Exercise } from './exercise';

export class ExerciseAsync2 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Async-2';
    this.question = 'What is logged when you call the run() method?';
    this.info = `Event loop and micro tasks as results of promises.
Micro tasks are only executed when the call stack is empty.
In this example the two parts of an expression are evaluated at two different timeslots,
the first part directly and the second part as a micro tast later.
`;
    this.infoUrl = 'https://www.youtube.com/watch?v=cCOL7MC4Pl0&list=WL&index=66';
    this.infoUrlName = 'What is the event loop (Tasks, MikroTasks, Rendering)';
    this.code = `private x: number;

public async run() {
  this.x = 0;
  await this.compute();
  this.x += 1;
  this.doLog("run() x = " + this.x);
}

private async compute() {
  this.x += await 2;
  this.doLog("compute() x = " + this.x);
};
`;
    this.solutionUrl = 'https://www.youtube.com/watch?v=bfxglBVSNDI&list=WL&index=70&t=0s';
    this.solution = `compute() x = 2
run() x = 3

Now we wait for compute() to complete (see also Async-1)
An async method implicitly returns a promise and await waits for the code
that will be executed as a micro task as soon as the call stack is empty.

==> Keep in mind: Global variables and async await may be problematic!
`;
  }

  public async run() {
    this.x = 0;
    await this.compute();
    this.x += 1;
    this.doLog('run() x = ' + this.x);
  }

  private async compute() {
    this.x += await 2;
    this.doLog('compute() x = ' + this.x);
  }
}
