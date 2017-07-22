import { Status } from './Status';

class Window {
  public constructor(
    public readonly status: Status,
    public readonly creationTime: number,
    public readonly sentTime: number,
    public readonly timeStart: number,
    public readonly timeEnd: number,
    public readonly windows: string[],
  ) { }

  public alter(
    status: Status,
    creationTime: number,
    sentTime: number,
    timeStart: number,
    timeEnd: number,
    windows: string[],
  ) {
    if (this.status !== status ||
      this.creationTime !== creationTime ||
      this.sentTime !== sentTime ||
      this.timeStart !== timeStart ||
      this.timeEnd !== timeEnd ||
      this.windows !== windows) {
      return new Window(status, creationTime, sentTime, timeStart, timeEnd, windows);
    }
  }
}
export default Window;
