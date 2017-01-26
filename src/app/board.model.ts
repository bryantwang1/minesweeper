export class Board {
  public grid: any[] = [];
  public time: number;
  public clickNumber: number = 0;
  public gameOver: boolean = false;


  constructor(public mineNumber: number, public xSize: number, public ySize: number) {}
}
