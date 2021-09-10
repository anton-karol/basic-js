import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let c of s1) {
    let i = s2.indexOf(c);
    if (i > -1) {
      count++;
      s2 = s2.slice(0, i) + s2.slice(i + 1);
    }
  }
  return count;
}
