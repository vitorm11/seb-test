const numbers = require('./numbers');

class IntegerToText {
  toText(number, response = '') {
    if(number > 99) {
      let currentNumber = Math.floor(number / 100);
      let remainder = Math.floor(number % 100);

      response += (currentNumber > 1 || (currentNumber === 1 && remainder === 0))?numbers[currentNumber+'00']:'cento';
      if(remainder > 0) {
        return this.toText(remainder, response);
      }
    } else if(number >= 20) {
      let currentNumber = Math.floor(number / 10);
      let remainder = Math.floor(number % 10);

      response += (response !== '')?' e '+numbers[currentNumber+'0']:numbers[currentNumber+'0'];
      if(remainder > 0) {
        return this.toText(remainder, response);
      }
    } else {
      response += (response !== '')?' e '+numbers[number]:numbers[number];
    }

    return response;
  }

  convert(number) {
    if(!Number.isInteger(number))
      throw Error('Not a integer number.');

    if(number < 1 || number > 999)
      throw Error('Number out of range. Please specify a number between 1 and 999.');

    return number + ' - ' + this.toText(number);
  }
}

module.exports = IntegerToText;
