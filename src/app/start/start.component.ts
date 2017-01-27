import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from './../player.model';
import { GameService } from './../game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToGame(difficulty: string, name: string) {
    GameService.createPlayer(name);
    this.router.navigate(['game', difficulty]);
  }

}
