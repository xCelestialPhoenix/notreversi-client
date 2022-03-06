import { Box, Grid } from '@mui/material';
import React, { FC, useContext } from 'react';
import { GameContext } from '../../context/Context';
import TileModel from '../../model/Tile';
import gameService from '../../services/GameService';
import Tile from './Tile/Tile';

interface FieldProps {}

const Field: FC<FieldProps> = function () {
  const gameContext = useContext(GameContext);

  function placePiece(tile: TileModel) {
    if (tile.piece) {
      console.log('Tile is occupied');
    } else {
      gameService.placePiece(tile);
    }
  }

  return (
    <Grid container direction='column' justifyContent='center'>
      {gameContext.field.grid.map((row) => (
        <Grid item xs={12}>
          <Grid container direction='row' justifyContent='center'>
            {row.map((column) => (
              <Box>
                <Grid
                  item
                  xs={12}
                  sx={{
                    cursor: 'pointer',
                  }}>
                  <div onClick={() => placePiece(column)}>
                    <Tile item={column} />
                  </div>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Field;
