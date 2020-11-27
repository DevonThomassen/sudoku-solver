import React from 'react';
import Box from './Box';

const Board = () => {
  return (
    <React.Fragment>
      <h1>Sudoku solver</h1>
      <div className="board">
        {[...Array(9)].map((e, i) =>
          <Box
            key={i}
            value={i}
          />)}
      </div>
    </React.Fragment>
  );
}

export default Board;
