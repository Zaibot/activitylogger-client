import { app } from 'electron';
import * as Datastore from 'nedb';
import * as path from 'path';
import { IError } from './IError';

export class DB {
  private _database: Datastore;

  public constructor() {
    this._database = new Datastore({
      autoload: true,
      corruptAlertThreshold: 1,
      filename: path.join(app.getPath('userData'), 'error.db'),
    });
  }

  public save(error: IError): Promise<void> {
    return new Promise((resolve, reject) => {
      this._database.insert(error, (err) => {
        if (err) { reject(err); } else { resolve(); }
      });
    });
  }

  public getAll(): Promise<IError[]> {
    return new Promise((resolve, reject) => {
      this._database.find({}, (err: Error, data: IError[]) => {
        if (err) { reject(err); } else { resolve(data); }
      });
    });
  }
}
export default new DB();
