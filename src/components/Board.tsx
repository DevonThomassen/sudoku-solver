import React from 'react';
import Box from './Box';

const Board = () => {
  return (
    <div className="board">
      {[...Array(9)].map((e, i) => 
        <Box 
          key={i} 
          value={i}
        />)}
    </div>
  );
}

export default Board;
