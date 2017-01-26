export class Player {
  public time: number; // in seconds
  public clicks: number;
  public difficulty: string;
  // because of custom
  public mines: number;
  public height: number;
  public width: number;

  constructor(public name: string) { }
}
