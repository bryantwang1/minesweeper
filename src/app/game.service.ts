import { Injectable } from '@angular/core';
import { Tile } from './tile.model';

@Injectable()
export class GameService {
  public board;
  public time: number;
  public clickNumber: number;

  constructor(public mineNumber: number, public xSize: number, public ySize: number) {
    this.board = new Array(ySize);
    for(var y=0;y < ySize;y++) {
      for(var x=0;x< xSize;x++) {
        this.board[y].push(new Tile(y, x));
      }
    }
  }

  getRandom(size: number) {
    return Math.floor(Math.random() * (size + 1));
  }

  placeMines() {
    for(var i=0;i < this.mineNumber;i++) {
      var randomY: number = this.getRandom(this.ySize);
      var randomX: number = this.getRandom(this.xSize);

      if(this.board[randomY][randomX].mineHere === false) {
        this.board[randomY][randomX].mineHere = true;
      } else {
        i--;
      }
    }

  }

}
