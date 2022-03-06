import Field from "./Field";
import Player from "./Player";

export default interface Game {
    field: Field,
    players: Player[],
    currPlayer: number,
    otherPlayer: number,
}