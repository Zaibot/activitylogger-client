import { Status } from './Status';

class TimelineCreate {
  public constructor(
    public readonly publicKey: string,
    public readonly timelineId: string,
  ) { }
}
export default TimelineCreate;
