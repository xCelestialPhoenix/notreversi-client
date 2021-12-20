import { Game } from "@model/game.model";
import { props, createAction } from "@ngrx/store";

export const ACTION_SET_GAME = "[App] Set Game"

export const setGame = createAction (
    ACTION_SET_GAME,
    props<{ game: Game }>()
);