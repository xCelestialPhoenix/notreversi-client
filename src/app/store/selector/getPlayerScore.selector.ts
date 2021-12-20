import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "@store/app.state";

export const getPlayerScore = createSelector(
    createFeatureSelector("game"),
    (state: AppState) => {
        return state.game.players;
    }
);