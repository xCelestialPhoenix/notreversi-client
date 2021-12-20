import { Piece, PieceColor } from "./piece.model";
import { Tile } from "./tile.model";

export interface Field {
    grid: Tile[][];
}
