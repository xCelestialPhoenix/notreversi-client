import React, { FC, useState } from 'react';
import { Message } from 'stompjs';
import { GameContext, PlayerContext } from '../../context/Context';
import Game from '../../model/Game';
import Player from '../../model/Player';
import Tile from '../../model/Tile';
import { connect } from '../../services/GameService';
import './ContextProvider.css';

interface ContextProviderProps {}

const ContextProvider: FC<ContextProviderProps> = function (props) {
  const [field, setField] = useState({ grid: [] as Tile[][] });
  const [currPlayer, setCurrPlayer] = useState(-1);
  const [players, setPlayers] = useState([
    { number: 1, score: -1 },
    { number: 2, score: -1 },
  ] as Player[]);

  /**
   * Need to grab game state from service here
   */
  connect((payload: Message) => {
    console.log('Game received!');
    const game: Game = JSON.parse(payload.body);
    setField(game.field);
    setPlayers(game.players);
    setCurrPlayer(game.currPlayer);
  });

  return (
    <GameContext.Provider
      value={{
        field: field,
        setField: setField,
        currPlayer: currPlayer,
        setCurrPlayer: setCurrPlayer,
      }}>
      <PlayerContext.Provider
        value={{
          players: players,
          setPlayer: setPlayers,
        }}>
        {props.children}
      </PlayerContext.Provider>
    </GameContext.Provider>
  );
};

export default ContextProvider;
