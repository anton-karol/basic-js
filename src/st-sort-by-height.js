import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let sortedArr = arr.filter((x) => x !== -1).sort((a, b) => b - a);
  let resultArr = [];
  for (let a of arr) {
    resultArr.push(a === -1 ? -1 : sortedArr.pop());
  }
  return resultArr;
}
