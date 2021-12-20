import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { setGame } from '@store/actions/setGame.action';
import { AppState } from '@store/app.state';
import { interval, lastValueFrom, Subscription } from 'rxjs';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnDestroy {

  private timer: Subscription;

  constructor(private gameService: GameService, private store: Store<AppState>){
    this.timer = interval(200).subscribe(async () => {
      const newState = await lastValueFrom(this.gameService.getGameState())
      this.store.dispatch(setGame({
        game: newState
      }))
    })
  }

  ngOnDestroy(): void {
      this.timer.unsubscribe();
  }
}
