
export class Meeting {
  public constructor(
    public readonly timeStart: number,
    public readonly timeEnd: number,
    public readonly title: string,
    public readonly description: string,
  ) { }
}
