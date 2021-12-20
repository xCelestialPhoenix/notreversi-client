import { Field } from "./field.model";
import { Player } from "./player.model";

export interface Game {
    field: Field;
    players: Player[];
    currPlayer: number;
}
