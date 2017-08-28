import { app } from 'electron';
import * as Datastore from 'nedb';
import * as path from 'path';

const intervalCompaction = 60000 * 15;

export interface IBufferItem {
  id: string;
  creationTime: number;
  type: string;
  data: any;
}

export class DB {
  private _database: Datastore;

  public constructor() {
    this._database = new Datastore({
      autoload: true,
      corruptAlertThreshold: 1,
      filename: path.join(app.getPath('userData'), 'buffer.db'),
    });
    this._database.persistence.setAutocompactionInterval(intervalCompaction);
  }

  public save(task: IBufferItem): Promise<void> {
    return new Promise((resolve, reject) => {
      this._database.update({ _id: task.id }, { _id: task.id, ...task }, { upsert: true }, (err) => {
        if (err) { reject(err); } else { resolve(); }
      });
    });
  }

  public remove(task: { id: string; }): Promise<void> {
    return new Promise((resolve, reject) => {
      this._database.remove({ _id: task.id }, (err) => {
        if (err) { reject(err); } else { resolve(); }
      });
    });
  }

  public getAll(): Promise<IBufferItem[]> {
    return new Promise((resolve, reject) => {
      this._database.find({}, (err: Error, data: IBufferItem[]) => {
        if (err) { reject(err); } else { resolve(data); }
      });
    });
  }
}
export default new DB();

// export default (databasePath: string) => {
//   return new NedbQueueStore(new Datastore({ filename: this.databasePath, autoload: true }));
// };
//
// export class NedbQueueStore {
//   public constructor(
//     private _datastore: Datastore,
//   ) { }
//
//   public connect(cb: any) {
//     this._datastore.count({ lock: '' }, (err, count) => {
//       return cb(err, count);
//     });
//   }
//
//   public getTask(taskId: string, cb: any) {
//     return this._datastore.findOne({ _id: taskId, lock: '' }, (err, result: any) => {
//       var task = result ? result.task || {} : {}
//       cb(err, task);
//     });
//   }
//
//   public deleteTask(taskId: string, cb: (err: Error) => void) {
//     this._datastore.findOne({ _id: taskId }, (err, task) => {
//       if (err) return cb(err);
//       this._datastore.remove({ _id: taskId }, {}, (err, numRemoved) => {
//         return cb(err);
//       });
//     });
//   }
//
//   public putTask(taskId: string, task: any, priority: any, cb: any) {
//     this._datastore.findOne({ _id: taskId }, (err, foundTask) => {
//       if (err) return cb(err);
//       if (foundTask) {
//         this.deleteTask(taskId, (error) => {
//           return this.insertTask(taskId, task, priority, cb);
//         });
//
//       } else {
//         return this.insertTask(taskId, task, priority, cb);
//       }
//     });
//   }
//
//   public insertTask(taskId: string, task: any, priority: any, cb: any) {
//     this._datastore.find({}, { added: 1, _id: 0 }).sort({ added: -1 }).limit(1).exec((err, docs) => {
//       var added = docs[0] ? docs[0].added++ : 1;
//       this._datastore.insert({
//         _id: taskId,
//         task: task,
//         priority: priority || 0,
//         lock: '',
//         added: docs[0] ? docs[0].added++ : 1
//       }, (err, newTask) => {
//         if (err) console.log('error inserting task', err);
//         return cb(err);
//       });
//     });
//   }
//
//   public takeNextN(first: number, n: number, cb: any) {
//     var sort = {
//       priority: -1,
//       added: first ? 1 : -1
//     };
//
//     this._datastore.find({ lock: '' }).sort(sort).limit(n).exec((err, results) => {
//       if (err) { console.log('takeNextN find error', err); return cb(err); }
//       if (!results) { console.log('takeNextN returned no results'); return cb(); }
//       var count = 0;
//       var lockId = uuid.v4();
//       results.forEach((res: any) => {
//         this._datastore.update({ _id: res._id }, { $set: { lock: lockId } }, {}, (err, numAffected, affectedDocs) => {
//           if (err) { console.log('takeNextN update error', err); return cb(err); }
//           count++;
//
//           if (count === results.length) {
//             return cb(null, lockId);
//           }
//         });
//       });
//     })
//   }
//
//   public getLock(lockId: string, cb: any) {
//     this._datastore.find({ lock: lockId }, null, (err, results) => {
//       var tasks: any = {};
//       results.forEach((row: any) => {
//         tasks[row._id] = row.task;
//       });
//       return cb(err, tasks);
//     });
//   }
//
//   public getRunningTasks(cb: any) {
//     this._datastore.find({ $not: { lock: '' } }, null, (err, results) => {
//       var tasks: any = {};
//       results.forEach((row: any) => {
//         tasks[row.lock] = tasks[row.lock] || [];
//         tasks[row.lock][row._id] = row.task;
//       });
//       return cb(err, tasks);
//     });
//   }
//
//   public releaseLock(lockId: string, cb: any) {
//     this._datastore.remove({ lock: lockId }, { multi: true }, (err, numRemoved: number) => {
//       return cb(err);
//     });
//   }
//
//   public close(cb: any) {
//     cb();
//   }
// }
