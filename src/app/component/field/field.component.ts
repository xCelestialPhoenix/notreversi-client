import { Component, OnInit } from '@angular/core';
import { Tile } from "@model/tile.model";
import { Store } from '@ngrx/store';
import { getField } from '@store/selector/getField.selector';
import { GameService } from 'app/services/game.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})

export class FieldComponent implements OnInit {

  constructor(private store: Store, private gameService: GameService) {}

  ngOnInit(): void {}

  placePiece(tile: Tile) {
    this.gameService.makeMove(tile);
  }

  getField() {
    return this.store.select(getField).pipe(map((field) => field.grid));
  }

  isOccupied(tile: Tile) {
    return tile !== undefined && tile.piece !== null;
  }

  getTilePiece(tile: Tile) {
    return tile.piece;
  }

  
}
