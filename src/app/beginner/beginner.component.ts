import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';
import { Board } from './../board.model';
import { Tile } from './../tile.model';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css'],
  providers: [GameService]
})
export class BeginnerComponent implements OnInit {
  board: Board;
  gameOver: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.board = this.gameService.makeBoard(10, 8, 8);
    this.gameService.startGame(this.board);
    this.gameService.checkTiles(this.board);
    console.log(this.board);
  }

  clickTile(clickedTile: Tile) {
    this.board.clickNumber++;
    this.gameService.clickTile(clickedTile, this.board);
    if(clickedTile.mineHere) {
      clickedTile.gameEnder = true;
      this.gameOver = true;
      this.gameService.endGame(this.board);
    }
  }

  mouseClick($event, clickedTile: Tile) {
    if($event.which === 3) {
      this.board.clickNumber++;
      if(!clickedTile.flagHere && !clickedTile.questionHere) {
        clickedTile.flagHere = true;
      } else if(clickedTile.flagHere === true && !clickedTile.questionHere) {
        clickedTile.flagHere = false;
        clickedTile.questionHere = true;
      } else {
        clickedTile.flagHere = false;
        clickedTile.questionHere = false;
      }
    } else if($event.which === 1) {
      this.clickTile(clickedTile);
    }
  }
}
