export class Board {
  public grid: any[] = [];
  public time: number;
  public clickNumber: number = 0;
  public gameOver: boolean = false;
  public checkedTiles: any[] = [];
  public flagNumber: number = 0;


  constructor(public mineNumber: number, public xSize: number, public ySize: number) {}
}
