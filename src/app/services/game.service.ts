import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Game } from '@model/game.model';
import { Tile } from '@model/tile.model';
import { TileRef } from '@model/tileRef.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGameState() {
    return this.http.get<Game>(environment.apiUrl + "/game");
  }

  makeMove(tile: Tile) {
    this.http.post<TileRef>(environment.apiUrl + "/move", {
      row: tile.row,
      col: tile.col,
    }).subscribe(res => {
      console.log(res);
    });
  }

  resetGame() {
    this.http.post<TileRef>(environment.apiUrl + "/cmd", {
      type: "reset"
    }).subscribe(res => {
      console.log(res);
    });
  }

  skipPlayer() {
    this.http.post<TileRef>(environment.apiUrl + "/cmd", {
      type: "skip"
    }).subscribe(res => {
      console.log(res);
    });
  }
}
