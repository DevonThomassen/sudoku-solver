import React, { ChangeEvent, Component, KeyboardEvent } from 'react';
import CellData from '../interfaces/CellData';

interface Props {
  readonly row: number;
  readonly col: number;
  readonly value: number;
  update: (cellData: CellData) => void;
}

interface State {
  number: number | null;
  value: string;
}

class Cell extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    // TODO: Remove all the state 🗑️ code
    this.state = {
      number: props.value,
      value: props.value.toString()
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  private handleChange(e: ChangeEvent<HTMLInputElement>): void {
    // Replace current number with new number
    if (e.target.value.length === 2) {
      const number = parseInt(e.target.value.charAt(1));
      if (!isNaN(number)) {
        this.setState({
          number: number,
          value: number.toString()
        });
        const _cell: CellData = {
          row: this.props.row,
          col: this.props.col,
          value: number
        }
        this.props.update(_cell);
      }
      return;
    }

    const number = parseInt(e.target.value);
    if (!isNaN(number) && e.target.value.length === 1) {
      this.setState({
        number: number,
        value: number.toString()
      })
    }
  }

  private handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Backspace" || e.key === "Delete") {
      this.setState({
        number: null,
        value: ''
      })
    }
  }

  render() {
    return (
      <div className="cell">
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        />
      </div>
    );
  }
}

export default Cell;
