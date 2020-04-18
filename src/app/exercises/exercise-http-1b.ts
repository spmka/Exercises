import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp1b extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-1-Ok';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call.
Every httpGet() call returns without error after 2000ms delay.
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public run() {
  const start = Date.now();
  this.doLog('httpGet(url-1) running...');
  const data1 = HttpSimulator.httpGet('url-1');
  this.doLog('httpGet(url-2) running...');
  const data2 = HttpSimulator.httpGet('url-2');
  this.doLog('httpGet(url-3) running...');
  const data3 = HttpSimulator.httpGet('url-3');
  Promise.all([data1, data2, data3]).then((data: Array<string>) => {
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data[0]);
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data[1]);
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data[2]);
    this.doLog('processing received data');
  });
}
`;
    this.solutionUrl = null;
    this.solution = `httpGet(url-1) running...
httpGet(url-2) running...
httpGet(url-3) running...
Elapsed: 2000ms - httGet(url-1): Ok
Elapsed: 2000ms - httGet(url-2): Ok
Elapsed: 2000ms - httGet(url-3): Ok
processing received data
    
Now all http calls are running in parallel with a total processing time of 2000ms.
==> The data is processed when all data has arrived, and the code looks better than in Exercise 1a!
`;
  }

  public run() {
    const start = Date.now();
    this.doLog('httpGet(url-1) running...');
    const data1 = HttpSimulator.httpGet('url-1');
    this.doLog('httpGet(url-2) running...');
    const data2 = HttpSimulator.httpGet('url-2');
    this.doLog('httpGet(url-3) running...');
    const data3 = HttpSimulator.httpGet('url-3');
    Promise.all([data1, data2, data3]).then((data: Array<string>) => {
      this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data[0]);
      this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data[1]);
      this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data[2]);
      this.doLog('processing received data');
    });
  }
}
