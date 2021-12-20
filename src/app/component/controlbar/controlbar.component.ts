import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'app-controlbar',
  templateUrl: './controlbar.component.html',
  styleUrls: ['./controlbar.component.css']
})
export class ControlbarComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  resetGame() {
    this.gameService.resetGame();
  }

  skipPlayer() {
    this.gameService.skipPlayer();
  }

}
