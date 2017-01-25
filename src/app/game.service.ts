import { Injectable } from '@angular/core';
import { Tile } from './tile.model';
import { Board } from './board.model';

@Injectable()
export class GameService {

  constructor() { }

  makeBoard(mineNumber: number, ySize: number, xSize: number) {
    return new Board(mineNumber, ySize, xSize);
  }

  startGame(board: Board) {
    for(var y=0;y < board.ySize;y++) {
      var newArray: Tile[] = [];
      board.grid.push(newArray);
      for(var x=0;x< board.xSize;x++) {
        board.grid[y].push(new Tile(y, x));
      }
    }
    this.placeMines(board);
  }

  getRandom(size: number) {
    return Math.floor(Math.random() * size);
  }

  placeMines(board: Board) {
    for(var i=0;i < board.mineNumber;i++) {
      var randomY: number = this.getRandom(board.ySize);
      var randomX: number = this.getRandom(board.xSize);

      if(board.grid[randomY][randomX].mineHere === false) {
        board.grid[randomY][randomX].mineHere = true;
      } else {
        i--;
      }
    }
  }

}
