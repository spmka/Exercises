import { Exercise } from './exercise';
import { HttpSimulator } from './http-simulator';

export class ExerciseHttp1a extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Http-1-Slow-Ugly';
    this.question = 'What is logged when you call the run() method?';
    this.info = `This exercise uses an http simulator that simulates an http call.
Every httpGet() call returns without error after 2000ms delay.
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public run() {
  const start = Date.now();
  this.doLog('httpGet(url-1) running...');
  HttpSimulator.httpGet('url-1').then(data => {
    this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data);
    this.doLog('httpGet(url-2) running...');
    HttpSimulator.httpGet('url-2').then(data => {
      this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data);
      this.doLog('httpGet(url-3) running...');
      HttpSimulator.httpGet('url-3').then(data => {
        this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data);
        this.doLog('processing received data');
      });
    });
  });
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

Now all http calls are running after each other the total processing time is 6000ms.
==> The data is processed when all data has arrived, but the code is ugly to read!
`;
  }

  public run() {
    const start = Date.now();
    this.doLog('httpGet(url-1) running...');
    HttpSimulator.httpGet('url-1').then(data => {
      this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data);
      this.doLog('httpGet(url-2) running...');
      HttpSimulator.httpGet('url-2').then(data => {
        this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data);
        this.doLog('httpGet(url-3) running...');
        HttpSimulator.httpGet('url-3').then(data => {
          this.doLog('Elapsed: ' + (Date.now() - start) + 'ms - ' + data);
          this.doLog('processing received data');
        });
      });
    });
  }
}
