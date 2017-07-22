import path from 'path';
import Datastore from 'nedb';
import { app } from 'electron'

const intervalCompaction = 60000 * 15;

export interface IFolderItem {
  id: string;
  creationTime: number;
  path: string;
}

export class DB {
  private _database: Datastore;

  public constructor() {
    this._database = new Datastore({
      corruptAlertThreshold: 1,
      filename: path.join(app.getPath('userData'), 'folder.db'),
      autoload: true
    });
    this._database.persistence.setAutocompactionInterval(intervalCompaction);
  }

  public save(task: IFolderItem): Promise<void> {
    return new Promise((resolve, reject) => {
      this._database.update({ id: task.id }, task, { upsert: true }, (err) => {
        if (err) { reject(err); } else { resolve(); }
      });
    });
  }

  public remove(task: { id: string; }): Promise<void> {
    return new Promise((resolve, reject) => {
      this._database.remove({ id: task.id }, (err) => {
        if (err) { reject(err); } else { resolve(); }
      });
    });
  }

  public getAll(): Promise<IFolderItem[]> {
    return new Promise((resolve, reject) => {
      this._database.find({}, (err: Error, data: IFolderItem[]) => {
        if (err) { reject(err); } else { resolve(data); }
      });
    });
  }
}
export default new DB();
