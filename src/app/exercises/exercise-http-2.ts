import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp2 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-2-Slow';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call.
Every httpGet() call returns without error after 2000ms delay.
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public async run() {
  const start = Date.now();
  this.doLog('httpGet(url-1) running...');
  const data1 = await HttpSimulator.httpGet('url-1');
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data1);
  this.doLog('httpGet(url-2) running...');
  const data2 = await HttpSimulator.httpGet('url-2');
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data2);
  this.doLog('httpGet(url-3) running...');
  const data3 = await HttpSimulator.httpGet('url-3');
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data3);
  this.doLog('processing received data');
}
`;
    this.solutionUrl = null;
    this.solution = `httpGet(url-1) running...
Elapsed: 2000ms - httGet(url-1): Ok
httpGet(url-2) running...
Elapsed: 4000ms - httGet(url-2): Ok
httpGet(url-3) running...
Elapsed: 6000ms - httGet(url-3): Ok
processing received data

All http calls are running after each other resulting in 6000ms processing time
in contrast to exercise 1b with only 2000ms processing time.
==> But we are processing the data when it is available.
`;
  }

  public async run() {
    const start = Date.now();
    this.doLog('httpGet(url-1) running...');
    const data1 = await HttpSimulator.httpGet('url-1');
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data1);
    this.doLog('httpGet(url-2) running...');
    const data2 = await HttpSimulator.httpGet('url-2');
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data2);
    this.doLog('httpGet(url-3) running...');
    const data3 = await HttpSimulator.httpGet('url-3');
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data3);
    this.doLog('processing received data');
  }
}
