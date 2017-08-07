import { Status } from './Status';

export class Folder {
  public constructor(
    public readonly status: Status,
    public readonly creationTime: number,
    public readonly sentTime: number,
    public readonly timeStart: number,
    public readonly timeEnd: number,
    public readonly folders: string[],
  ) { }
}
