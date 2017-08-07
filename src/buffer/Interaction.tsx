import { Status } from './Status';

export class Interaction {
  public constructor(
    public readonly status: Status,
    public readonly creationTime: number,
    public readonly sentTime: number,
    public readonly timeStart: number,
    public readonly timeEnd: number,
    public readonly keypresses: number,
    public readonly mousepresses: number,
  ) { }

  public alter(
    status: Status,
    creationTime: number,
    sentTime: number,
    timeStart: number,
    timeEnd: number,
    keypresses: number,
    mousepresses: number,
  ) {
    if (this.status !== status ||
      this.creationTime !== creationTime ||
      this.sentTime !== sentTime ||
      this.timeStart !== timeStart ||
      this.timeEnd !== timeEnd ||
      this.keypresses !== keypresses ||
      this.mousepresses !== mousepresses) {
      return new Interaction(status, creationTime, sentTime, timeStart, timeEnd, keypresses, mousepresses);
    }
  }
}
