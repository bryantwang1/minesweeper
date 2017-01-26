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
  userClick: boolean = false;
  firstClick: boolean = true;

  constructor(private gameService: GameService) {  }

  ngOnInit() {
    this.startGame();
  }

  clickTile(clickedTile: Tile) {
    this.board.clickNumber++;
    this.gameService.clickTile(clickedTile, this.board);
    this.userClick = false;
  }

  userClicking() {
    this.userClick = true;
  }

  mouseClick($event, clickedTile: Tile) {
    this.userClick = false;
    if($event.which === 3) {
      this.board.clickNumber++;
      if(!clickedTile.flagHere && !clickedTile.questionHere) {
        clickedTile.flagHere = true;
        this.board.flagNumber++;
      } else if(clickedTile.flagHere === true && !clickedTile.questionHere) {
        this.board.flagNumber--;
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

  startGame() {
    this.board = this.gameService.makeBoard(10, 8, 8);
    this.gameService.startGame(this.board);
    this.gameService.checkTiles(this.board);
    console.log(this.board);
  }
}
