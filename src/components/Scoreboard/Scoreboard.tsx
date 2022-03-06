import { AppBar, Box, Grid, Typography } from '@mui/material';
import React, { FC, useContext } from 'react';
import { GameContext, PlayerContext } from '../../context/Context';
import './Scoreboard.css';
import ScoreTag from './ScoreTag/ScoreTag';

interface ScoreboardProps {}

const Scoreboard: FC<ScoreboardProps> = function () {
  const gameContext = useContext(GameContext);
  const playerContext = useContext(PlayerContext);

  return (
    <AppBar position='static'>
      <Grid
        container
        sx={{
          alignItems: 'stretch',
        }}>
        <Grid item xs={2}>
          <ScoreTag player='1' score={playerContext.players[0].score} />
        </Grid>
        <Grid item xs>
          <Box
            sx={{
              height: '100%',
              background: gameContext.currPlayer === 0 ? 'black' : 'white',
            }}>
            <Typography
              variant='overline'
              sx={{
                fontSize: '1rem',
                fontWeight: 800,
                color: gameContext.currPlayer === 0 ? 'white' : 'black',
              }}>
              Player {gameContext.currPlayer + 1}'s Turn
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <ScoreTag player='2' score={playerContext.players[1].score} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Scoreboard;
