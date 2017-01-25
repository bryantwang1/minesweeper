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
      console.log(randomY + ", " + randomX);

      if(board.grid[randomY][randomX].mineHere === false) {
        board.grid[randomY][randomX].mineHere = true;
      } else {
        i--;
      }
    }
  }

  checkTiles(board: Board) {
    for(let row of board.grid) {
      for(let tile of row) {
        if(tile.mineHere) {
          for(var i=tile.yPos-1;i<tile.yPos+2;i++) {
            for(var d=tile.xPos-1;d<tile.xPos+2;d++) {
              if(i >= 0 && d >= 0 && i <= board.ySize-1 && d <= board.xSize-1) {
                board.grid[i][d].mineNumber++;
                console.log("number: " + board.grid[i][d].mineNumber);
              }
            }
          }
        }
      }
    }
  }

  clickTile(clickedTile: Tile, board: Board) {
    if(!clickedTile.clicked) {
      clickedTile.clicked = true;
    } else {
      if(!clickedTile.mineHere && clickedTile.clicked) {
        console.log("enter crazy");
        for(var i=clickedTile.yPos-1;i<clickedTile.yPos+2;i++) {
          console.log("crazy 1");
          for(var d=clickedTile.xPos-1;d<clickedTile.xPos+2;d++) {
            console.log("crazy 2");
            if(i >= 0 && d >= 0 && i <= board.ySize-1 && d <= board.xSize-1) {
              console.log("crazy 3");
              console.log("crazy 3: " + board.grid[i][d]);
              if(!board.grid[i][d].mineHere) {
                console.log("enter crazier");
                board.grid[i][d].clicked = true;
              }
            }
          }
        }
      }
    }
  }

}
