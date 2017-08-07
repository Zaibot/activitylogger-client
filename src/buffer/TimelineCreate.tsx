import { Status } from './Status';

export class TimelineCreate {
  public constructor(
    public readonly publicKey: string,
    public readonly timelineId: string,
  ) { }
}
