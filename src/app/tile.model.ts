export class Tile {
  public mineHere: boolean = false;
  public flagHere: boolean = false;
  public questionHere: boolean = false;
  public mineNumber: number = 0;
  public yPos: number = -1;
  public xPos: number = -1;
  public clicked: boolean = false;

  constructor(y: number, x: number) {
    this.yPos = y;
    this.xPos = x;
  }
}
