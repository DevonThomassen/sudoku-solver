import React from 'react';
import Cell from './Cell';

interface Props {
  readonly value: number;
}

const Box = (props: Props) => {
  return (
    <div className={`box`} data-row={props.value}>
      {[...Array(9)].map((e, i) =>
        <Cell
          key={i}
          row={props.value}
          col={i}
        />)}
    </div>
  );
}

export default Box;
