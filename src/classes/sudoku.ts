import CellData from "../interfaces/CellData";

class Sudoku {
  private grid: number[][];

  public constructor() {
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ];
  }

  public getGrid = (): number[][] => {
    return this.grid;
  }

  public updateGrid(cell: CellData) {
    console.log("update!");

    this.grid[cell.row][cell.col] = cell.value;
  }

  public getBox = (boxNumber: number): number[] => {
    switch (boxNumber) {
      case 0:
      case 3:
      case 6:
        return this.getLeftColBox(this.getBoxRow(boxNumber));
      case 1:
      case 4:
      case 7:
        return this.getMiddleColBox(this.getBoxRow(boxNumber));
      case 2:
      case 5:
      case 8:
        return this.getRightColBox(this.getBoxRow(boxNumber));
      default:
        console.log("Unknown box number");
        return this.getLeftColBox(0);
    }
  }

  private getBoxRow = (boxNumber: number): number => {
    let r = 0;
    if (boxNumber === 0 || boxNumber === 1 || boxNumber === 2)
      r = 0;
    else if (boxNumber === 3 || boxNumber === 4 || boxNumber === 5)
      r = 1;
    else if (boxNumber === 6 || boxNumber === 7 || boxNumber === 8)
      r = 2;
    return r * 3;
  }

  private getLeftColBox = (boxRow: number): number[] => {
    return [
      this.grid[boxRow][0], this.grid[boxRow][1], this.grid[boxRow][2],
      this.grid[boxRow + 1][0], this.grid[boxRow + 1][1], this.grid[boxRow + 1][2],
      this.grid[boxRow + 2][0], this.grid[boxRow + 2][1], this.grid[boxRow + 2][2]
    ];
  }

  private getMiddleColBox = (boxRow: number): number[] => {
    return [
      this.grid[boxRow][3], this.grid[boxRow][4], this.grid[boxRow][5],
      this.grid[boxRow + 1][3], this.grid[boxRow + 1][4], this.grid[boxRow + 1][5],
      this.grid[boxRow + 2][3], this.grid[boxRow + 2][4], this.grid[boxRow + 2][5]
    ];
  }

  private getRightColBox = (boxRow: number): number[] => {
    return [
      this.grid[boxRow][6], this.grid[boxRow][7], this.grid[boxRow][8],
      this.grid[boxRow + 1][6], this.grid[boxRow + 1][7], this.grid[boxRow + 1][8],
      this.grid[boxRow + 2][6], this.grid[boxRow + 2][7], this.grid[boxRow + 2][8]
    ];
  }
}

export default Sudoku;