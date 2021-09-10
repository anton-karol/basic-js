import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    result[i] = new Array(matrix[i].length).fill(0);
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let m = -1; m <= 1; m++) {
        for (let n = -1; n <= 1; n++) {
          if (m === 0 && n === 0) continue;
          if (matrix[i + m] === undefined) continue;
          if (matrix[i + m][j + n] === true) count++;
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}
