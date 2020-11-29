import React from 'react';
import Cell from './Cell';
import CellData from '../interfaces/CellData';

interface Props {
  data: number[];
  readonly value: number;
  update: (cellData: CellData) => void;
}

const Box = (props: Props) => {
  return (
    <div className={`box`}>
      {props.data.map((e, i) =>
        <Cell
          key={i}
          row={props.value}
          col={i}
          value={e}
          update={(cellData: CellData) => props.update(cellData)}
        />)}
    </div>
  );
}

export default Box;
