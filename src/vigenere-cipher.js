import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(value) {
    //this.isDirect = (value || value === undefined)
    if (value || value === undefined) this.isReverse = false;
    else this.isReverse = true;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) 
      throw new Error("Incorrect arguments!");
    key = key.padEnd(message.length, key).toUpperCase();
    message = message.toUpperCase();
    let result = "";
    let i = 0;
    for (let letter of message) {
      if (this.alphabet.includes(letter)) {
        result += this.alphabet[(this.alphabet.indexOf(letter) + this.alphabet.indexOf(key[i])) % 26];
        i++;
      } else {
        result += letter;
      }
    }
    return this.isReverse ? [...result].reverse().join('') : result;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) 
      throw new Error("Incorrect arguments!");
    key = key.padEnd(encryptedMessage.length, key).toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();
    let result = "";
    let i = 0;
    for (let letter of encryptedMessage) {
      if (this.alphabet.includes(letter)) {
        result += this.alphabet[(this.alphabet.indexOf(letter) - this.alphabet.indexOf(key[i]) + 26) % 26];
        i++;
      } else {
        result += letter;
      }
    }
    return this.isReverse ? [...result].reverse().join('') : result;
  }
}
