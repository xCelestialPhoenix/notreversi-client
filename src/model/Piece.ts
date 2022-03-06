export default interface Piece {
    owner: number;
}

export enum PieceColor {
    BLACK = 'black',
    WHITE = 'white',
}

// export default class Piece {

//     private owner: number;

//     constructor(player: number) {
//         this.owner = player;
//     }

//     get color(): string {
//         return this.owner === 1 ? 'black' : 'white';
//     }

//     public flip() {
//         this.owner = (this.owner % 2) + 1;
//     }
// }