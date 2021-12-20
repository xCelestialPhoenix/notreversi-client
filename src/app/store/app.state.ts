import { Game } from "@model/game.model";

export const initialState: AppState = {
    game: {
        field: {
            grid: [...Array(8)].map(row => Array(8)),
        },
        players: [
            { 
                score: 0,
                playerNum: 0,
            },
            {
                score: 0 ,
                playerNum: 1,
            } 
        ],
        currPlayer: 0,
    }
}

export interface AppState {
    readonly game: Game;
}