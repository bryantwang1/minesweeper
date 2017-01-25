import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';
import { Board } from './../board.model';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css'],
  providers: [GameService]
})
export class BeginnerComponent implements OnInit {
  board: Board;
  whatClick;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.board = this.gameService.makeBoard(10, 8, 8);
    this.gameService.startGame(this.board);
    this.gameService.checkTiles(this.board);
    console.log(this.board);
  }

  clickTile(clickedTile) {
    clickedTile.clicked = true;
  }

  rightClick($event, clickedTile) {
     if($event.which === 3) {
       if(!clickedTile.flagHere && !clickedTile.questionHere) {
         clickedTile.flagHere = true;
       } else if(clickedTile.flagHere === true && !clickedTile.questionHere) {
         clickedTile.flagHere = false;
         clickedTile.questionHere = true;
       } else {
         clickedTile.flagHere = false;
         clickedTile.questionHere = false;
       }
     }
  }
}
