export class Board {
  public grid: any[] = [];
  public time: number;
  public clickNumber: number;


  constructor(public mineNumber: number, public xSize: number, public ySize: number) {}
}
