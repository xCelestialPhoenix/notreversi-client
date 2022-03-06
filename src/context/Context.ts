import { createContext } from "react";
import Field from "../model/Field";
import Player from "../model/Player";

export const GameContext = createContext({
    field: {} as Field,
    setField: (Field: Field) => {},
    currPlayer: 0,
    setCurrPlayer: (player: number) => {},
})

export const PlayerContext = createContext({
    players: [] as Player[],
    setPlayer: (Players: Player[]) => {},
})