import { Button } from '@mui/material';
import React, { FC } from 'react';
import gameService from '../../services/GameService';
import './ControlBar.css';

interface ControlBarProps {}

const ControlBar: FC<ControlBarProps> = function () {
  function skip() {
    gameService.skipTurn();
  }

  function reset() {
    gameService.newGame();
  }

  return (
    <div className='ControlBar'>
      <Button variant='contained' color='secondary' onClick={reset}>
        Reset
      </Button>
      <Button variant='contained' onClick={skip}>
        Skip
      </Button>
    </div>
  );
};

export default ControlBar;
