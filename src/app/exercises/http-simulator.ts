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

  public static httpGetWithResult(url: string): Promise<Result<string, HttpError>> {
    return new Promise<Result<string, HttpError>>((resolve, reject) => {
      setTimeout(() => resolve(Result.ok('httGet(' + url + '): Ok')), 2000);
    });
  }

  public static httpGetWithErrorWithResult(url: string): Promise<Result<string, HttpError>> {
    return new Promise<Result<string, HttpError>>((resolve, reject) => {
      setTimeout(() => resolve(Result.err(new HttpError('httGet(' + url + '): Error 500'))), 2000);
    });
  }
}

export class HttpError extends Error {}
