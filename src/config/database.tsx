import path from 'path';
import Datastore from 'nedb';
import { app } from 'electron'

const intervalCompaction = 60000 * 15;

export class DB {
  private _database: Datastore;

  public constructor() {
    this._database = new Datastore({
      corruptAlertThreshold: 1,
      filename: path.join(app.getPath('userData'), 'config.db'),
      autoload: true
    });
    this._database.persistence.setAutocompactionInterval(intervalCompaction);
  }

  public set<T>(key: string, value: T): Promise<void> {
    return new Promise((resolve, reject) => {
      this._database.update({ _id: key }, { _id: key, value }, { upsert: true }, (err) => {
        if (err) { reject(err); } else { resolve(); }
      });
    });
  }

  public get<T>(key: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this._database.findOne({ _id: key }, (err, data: { value: T }) => {
        if (err) { reject(err); } else { resolve(data ? data.value : null); }
      });
    });
  }
}
export default new DB();
