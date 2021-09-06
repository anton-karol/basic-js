import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(
  str,
  {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  }
) {
  if (typeof str !== "string") str = String(str);
  if (typeof addition !== "string") addition = String(addition);
  let repeatedAddition = addition;
  for (let i = 1; i < additionRepeatTimes; i++) {
    repeatedAddition += additionSeparator + addition;
  }
  str += repeatedAddition;
  let repeatedStr = str;
  for (let i = 1; i < repeatTimes; i++) {
    repeatedStr += separator + str;
  }
  return repeatedStr;
}
