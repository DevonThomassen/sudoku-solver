import React from 'react';
import Box from './Box';
import CellData from '../interfaces/CellData';
import Sudoku from '../classes/sudoku';

interface Props {
  sudoku: Sudoku;
}

interface State {
  boxes: number[][];
}

class Board extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      boxes: this.loadBoxes()
    }

  }

  private loadBoxes = (): number[][] => {
    const sudoku = this.props.sudoku;
    let _boxes: number[][] = [];
    for (let i = 0; i < 9; i++) {
      _boxes.push(sudoku.getBox(i));
    }
    return _boxes;
  }

  render() {
    return (
      <div className="board">
        {this.state.boxes.map((e, i) =>
          <Box
            key={i}
            data={e}
            value={i}
            update={(cellData: CellData) => this.props.sudoku.updateGrid(cellData)}
          />)}
      </div>
    );
  }
}

export default Board;
