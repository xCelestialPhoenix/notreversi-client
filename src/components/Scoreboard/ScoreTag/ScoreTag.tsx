import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import './ScoreTag.css';

interface ScoreTagProps {
  player: string;
  score: number;
}

const ScoreTag: FC<ScoreTagProps> = function (props) {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        background: 'green',
      }}>
      <Typography
        variant='overline'
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
          color: props.player === '1' ? 'black' : 'white',
        }}>
        Player {props.player}: {props.score}
      </Typography>
    </Box>
  );
};

export default ScoreTag;
