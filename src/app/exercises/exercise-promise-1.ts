import { Exercise } from './exercise';

export class ExercisePromise1 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Promise-1';
    this.question = 'What is logged when you call the run() method?';
    this.info = `If you don't know what a promise is, please read the linked article.
`;
    this.infoUrl = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises';
    this.infoUrlName = 'All about promises';
    this.code = `public run() {
  new Promise((resolve, reject) => {
    resolve(1);
    this.doLog(2);
    Promise.resolve().then(() => this.doLog(3));
  }).then(data => this.doLog(data));
}
`;
    this.solutionUrl = null;
    this.solution = `2
3
1

public run(doLog: (string) => void) {              // we start executing the run method
  new Promise((resolve, reject) => {               // we create a new promise
    resolve(1);                                    // our new created promis is resolved to 1
                                                   // but currently there is no then() active 
    this.doLog(2);                                 // we reach this log statement and execute it
    Promise.resolve().then(() => this.doLog(3));   // we resolve another promis and schedule a micro task
                                                   // for logging 3
  }).then(data => this.doLog(data));               // at last we schedule a micro task to log the resolved data
                                                   // of our created promise 
}
                                                   // run() is finished and now the event loop executes all
                                                   // scheduled micro tasks in the order of their appearance
                                                   // -> doLog(3) and doLog(data) with data = 1 (resolve(1)) 
`;
  }

  public run() {
    new Promise((resolve, reject) => {
      resolve(1);
      this.doLog(2);
      Promise.resolve().then(() => this.doLog(3));
    }).then(data => this.doLog(data));
  }
}
