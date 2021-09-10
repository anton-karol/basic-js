import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  return str
    ? str.match(/(.)\1*/g)
         .map((v) => (v.length > 1 ? v.length : "") + v[0])
         .join("")
    : "";
}
