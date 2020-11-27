import React, { ChangeEvent, Component, KeyboardEvent } from 'react';

interface Props {
  readonly row: number;
  readonly col: number;
}

interface State {
  number: number | null;
  value: string;
}

class Cell extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      number: null,
      value: ''
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
        })
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
      //<div className={`square row-${props.row} col-${props.col}`}
      <div className="cell"
        data-row={this.props.row}
        data-col={this.props.col}
      >
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
