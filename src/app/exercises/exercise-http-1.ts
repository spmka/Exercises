import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp1 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-1-Wrong';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call.
Every httpGet() call returns without error after 2000ms delay.

http() calls in Angular return an Observable but with toPromise() Observables can be turned 
into a Promise. Promises are easier to handle especially with async await.

Here is the HttpSimulator:

export class HttpSimulator {
  public static httpGet(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('httGet(' + url + '): Ok'), 2000);
    });
  }
}
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public run() {
  const start = Date.now();
  this.doLog('httpGet(url-1) running...');
  HttpSimulator.httpGet('url-1')
    .then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
  this.doLog('httpGet(url-2) running...');
  HttpSimulator.httpGet('url-2')
    .then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
  this.doLog('httpGet(url-3) running...');
  HttpSimulator.httpGet('url-3')
    .then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
  this.doLog('processing received data');
}
`;
    this.solutionUrl = null;
    this.solution = `httpGet(url-1) running...
httpGet(url-2) running...
httpGet(url-3) running...
processing received data
Elapsed: 2000ms - httGet(url-1): Ok
Elapsed: 2000ms - httGet(url-2): Ok
Elapsed: 2000ms - httGet(url-3): Ok

All http calls are running in parallel and return after aprox. 2000ms.
==> But OOPS we are processing data before it arrived!
`;
  }

  public run() {
    const start = Date.now();
    this.doLog('httpGet(url-1) running...');
    HttpSimulator.httpGet('url-1').then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
    this.doLog('httpGet(url-2) running...');
    HttpSimulator.httpGet('url-2').then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
    this.doLog('httpGet(url-3) running...');
    HttpSimulator.httpGet('url-3').then(data => this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data));
    this.doLog('processing received data');
  }
}
