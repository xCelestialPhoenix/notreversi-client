import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayer } from '@store/selector/getPlayer.selector';
import { getPlayerScore } from '@store/selector/getPlayerScore.selector';
import { map } from 'rxjs';

@Component({
  selector: 'app-infoboard',
  templateUrl: './infoboard.component.html',
  styleUrls: ['./infoboard.component.css']
})
export class InfoboardComponent implements OnInit {

  constructor(private store: Store) { }

  getPlayer1Score() {
    return this.store.select(getPlayerScore).pipe(map((players) => players[0].score));
  }

  getPlayer2Score() {
    return this.store.select(getPlayerScore).pipe(map((players) => players[1].score));
  }

  getCurrentPlayer() {
    return this.store.select(getPlayer).pipe(map((player) => player + 1));
  }

  ngOnInit(): void {
  }

}
