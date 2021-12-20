import { createReducer, on } from "@ngrx/store";
import { ACTION_SET_GAME, setGame } from "@store/actions/setGame.action";
import { initialState } from "@store/app.state";

export const gameReducer = createReducer(
    initialState,
    on(setGame, (state, action) => ({
        ...state, 
        game: action.game
    }))
)
