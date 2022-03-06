import React, { FC } from 'react';
import TileModel from '../../../model/Tile';
import Piece from '../Piece/Piece';
import './Tile.css';

interface TileProps {
  item: TileModel;
}

const Tile: FC<TileProps> = function (props) {
  return (
    <div className='Tile'>
      <Piece piece={props.item.piece} />
    </div>
  );
};

export default Tile;
