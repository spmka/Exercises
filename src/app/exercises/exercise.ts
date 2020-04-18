export abstract class Exercise {
  public name: string;
  public question: string;
  public info: string;
  public infoUrl: string;
  public infoUrls: Array<string>;
  public infoUrlName: string;
  public infoUrlNames: Array<string>;
  public code: string;
  public solution: string;
  public solutionUrl: string;
  public doLog: (string) => void;

  public abstract run();
}
