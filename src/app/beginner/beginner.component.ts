import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
  difficulty;

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
    if(this.difficulty === 'beginner') {
      this.board = this.gameService.makeBoard(10, 8, 8);
    } else if(this.difficulty === 'intermediate') {
      this.board = this.gameService.makeBoard(40, 16, 16);
    } else if(this.difficulty === 'advanced') {
      this.board = this.gameService.makeBoard(99, 24, 24);
    }
    this.gameService.startGame(this.board);
    this.gameService.checkTiles(this.board);
    console.log(this.board);
  }
}
