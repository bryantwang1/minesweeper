import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from './../game.service';
import { Board } from './../board.model';
import { Tile } from './../tile.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit {
  board: Board;
  gameOver: boolean = false;
  userClick: boolean = false;
  firstClick: boolean = true;
  isCustom: boolean = false;
  difficulty;
  customMines: number = 0;
  customY: number = 0;
  customX: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gameService: GameService
  ) {  }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.difficulty = urlParams['difficulty'];
    });
    console.log(this.difficulty);
    if(this.difficulty !== 'Custom'){
      this.startGame(false);
    } else {
      this.startGame(true);
      this.isCustom = true;
    }
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

  startGame(custom: boolean) {
    if(custom) {
      this.customMines = (this.customMines > 450) ? 450 : this.customMines;
      this.customY = (this.customY > 50) ? 50 : this.customY;
      this.customX = (this.customX > 50) ? 50 : this.customX;
      this.board = this.gameService.makeBoard(this.customMines, this.customY, this.customX);
    } else {
      if(this.difficulty === 'Beginner') {
        this.board = this.gameService.makeBoard(10, 8, 8);
      } else if(this.difficulty === 'Intermediate') {
        this.board = this.gameService.makeBoard(40, 16, 16);
      } else if(this.difficulty === 'Advanced') {
        this.board = this.gameService.makeBoard(99, 24, 24);
      }
    }
    this.gameService.startGame(this.board);
    this.gameService.checkTiles(this.board);
  }
}
