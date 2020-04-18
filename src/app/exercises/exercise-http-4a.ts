import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp4a extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-4-Error-2';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call.
Every httpGet() call returns without error after 2000ms delay.
Every httpGetWithError() call returns with error after 2000ms delay.
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public async run() {
  const start = Date.now();
  try {
    await this.doCalls();
  } catch (err) {
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + err);
  }
}

public async doCalls() {
  const start = Date.now();
  this.doLog('httpGet(url-1) running...');
  const data1 = HttpSimulator.httpGet('url-1');
  this.doLog('httpGetError(url-2) running...');
  const data2 = HttpSimulator.httpGetWithError('url-2');
  this.doLog('httpGet(url-3) running...');
  const data3 = HttpSimulator.httpGet('url-3');
  await Promise.all([data1, data2, data3]);
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data1);
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data2);
  this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data3);
  this.doLog('processing received data');
}
`;
    this.solutionUrl = null;
    this.solution = `httpGet(url-1) running...
httpGetError(url-2) running...
httpGet(url-3) running...
Elapsed: 2000ms - Error: httGet(url-2): Error 500

==> The error that occured during calling url-2 is caught in the catch block.
`;
  }

  public async run() {
    const start = Date.now();
    try {
      await this.doCalls();
    } catch (err) {
      this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + err);
    }
  }

  public async doCalls() {
    const start = Date.now();
    this.doLog('httpGet(url-1) running...');
    const data1 = HttpSimulator.httpGet('url-1');
    this.doLog('httpGetError(url-2) running...');
    const data2 = HttpSimulator.httpGetWithError('url-2');
    this.doLog('httpGet(url-3) running...');
    const data3 = HttpSimulator.httpGet('url-3');
    await Promise.all([data1, data2, data3]);
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data1);
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data2);
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data3);
    this.doLog('processing received data');
  }
}
