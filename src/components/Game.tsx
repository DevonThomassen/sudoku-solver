import React from 'react';
import Sudoku from '../classes/sudoku';
import Board from './Board';

interface Props {

}

interface State {
  game: number;
  sudoku: Sudoku;
}

class Game extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      game: 0,
      sudoku: new Sudoku()
    }
  }

  private getSudoku = (): Sudoku => {
    return this.state.sudoku;
  }

  render() {
    return (
      <div className="game">
        <h1>Sudoku solver</h1>
        <Board
          key={this.state.game}
          sudoku={this.getSudoku()}
        />
        <button>Solve</button>
        <button onClick={() => console.log(this.getSudoku().getGrid())}>LOG</button>
      </div>
    );
  }
}

export default Game;