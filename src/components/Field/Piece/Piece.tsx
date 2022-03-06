import React, { FC } from 'react';
import PieceModel, { PieceColor } from '../../../model/Piece';
import './Piece.css';

interface PieceProps {
  piece: PieceModel | null;
}

const Piece: FC<PieceProps> = function (props) {
  return (
    <div
      className={
        'Piece ' +
        (props.piece
          ? props.piece.owner === 0
            ? PieceColor.BLACK
            : PieceColor.WHITE
          : 'transparent')
      }></div>
  );
};

export default Piece;
