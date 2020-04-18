import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp4 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-4-Error-1';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call.
Every httpGet() call returns without error after 2000ms delay.
Every httpGetWithError() call returns with error after 2000ms delay.

This is our HttpSimulator:

import { Result } from '../util/result';

export class HttpSimulator {
  public static httpGet(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('httGet(' + url + '): Ok'), 2000);
    });
  }

  public static httpGetWithError(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => reject(new HttpError('httGet(' + url + '): Error 500')), 2000);
    });
  }  
}
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public async run() {
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

==> An uncaught error is listed in the console:
ERROR Error: Uncaught (in promise): Error: httGet(url-2): Error 500
Error: httGet: Error 500
    at new HttpError (https://gc7el.csb.app/src/app/exercises/http-simulator.ts:32:42)
    ...
`;
  }

  public async run() {
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
