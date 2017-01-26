export class Board {
  public grid: any[] = [];
  public time: number;
  public clickNumber: number = 0;
  public gameOver: boolean = false;
  public checkedTiles: any[] = [];
  public flagNumber: number = 0;
  public secondsElapsed: number = 0;
  public firstClick: boolean = true;
  public winningTileAmount: number;
  public shownTileCounter: number = 0;
  public gameWon: boolean = false;


  constructor(public mineNumber: number, public xSize: number, public ySize: number) {
    this.winningTileAmount = (xSize * ySize) - mineNumber;
  }
}
