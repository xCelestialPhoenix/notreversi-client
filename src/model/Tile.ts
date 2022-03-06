import Piece from "./Piece";

export default interface Tile {
    piece: Piece | null;
}

// export default class Tile {
//     private piece: Piece | null;

//     constructor(piece?: Piece) {
//         if (piece) {
//             this.piece = piece
//         } else {
//             this.piece = null;
//         }
//     }

//     public flipPiece() {
//         if (!this.piece) {
//             throw new Error('There is no piece in this field');
//         }
//         this.piece.flip();
//     }

//     public placePiece(player: number) {
//         if (this.piece) {
//             throw new Error('Tile is occupied');
//         }

//         this.piece = new Piece(player);
//     }
// }