import { Component, Input } from '@angular/core';
import { Piece, PieceColor } from '@model/piece.model';

@Component({
  selector: 'app-piece',
  templateUrl: 'piece.component.html',
  styleUrls: ['piece.component.css']
})
export class PieceComponent {

  @Input() piece!: Piece;

  constructor() { }

  getColor() {
    if (this.piece.owner === 0) {
      return PieceColor.BLACK;
    } else if (this.piece.owner === 1) {
      return PieceColor.WHITE;
    } else {
      return PieceColor.INVALID;
    }
  }

}
