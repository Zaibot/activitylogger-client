import DB from './DB';
import { EventEmitter } from "events";

const serializeError = (err: Error) => {
  try {
    return JSON.stringify(err);
  } catch (ex) {
    return JSON.stringify(`Serialization error: ${ex.message}`);
  }
};

export class ReportArgs {
  public constructor(
    public readonly time: number,
    public readonly error: Error
  ) { }
}

export class Report extends EventEmitter {
  public on(event: 'report', listener: (args: ReportArgs) => void): this;
  public on(event: string | symbol, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  public error(err: Error) {
    const time = Date.now();
    const message = err.message;
    const details = serializeError(err);
    DB.save({ time, message, details });
    this.emit('report', new ReportArgs(time, err));
    console.error(`[REPORT]`, err);
  }
}
export default new Report();
