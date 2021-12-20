import { Piece } from "@model/piece.model"

export interface Tile {
    row: number,
    col: number;
    piece: Piece;
}