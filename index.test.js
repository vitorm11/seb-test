const IntegerToText = require('./index');

let integerToText;

describe('IntegerToText tests', () => {
  beforeEach(() => {
    integerToText = new IntegerToText();
  });

  it('Should have "toText" function', () => {
    expect(typeof integerToText.toText).toBe('function');
  });

  it('Should have "convert" function', () => {
    expect(typeof integerToText.convert).toBe('function');
  });

  it('Should throw error when isn\'t integer number', () => {
    expect(() => {
      integerToText.convert(35.14);
    }).toThrow('Not a integer number.');
  });

  it('Should throw error when range isn\'t allowed', () => {
    expect(() => {
      integerToText.convert(2018);
    }).toThrow('Number out of range. Please specify a number between 1 and 999.');
  });

  it('Should came correct spelling when "convert" function is called', () => {
    expect(integerToText.convert(1)).toBe('1 - um');
    expect(integerToText.convert(18)).toBe('18 - dezoito');
    expect(integerToText.convert(26)).toBe('26 - vinte e seis');
    expect(integerToText.convert(97)).toBe('97 - noventa e sete');
    expect(integerToText.convert(100)).toBe('100 - cem');
    expect(integerToText.convert(101)).toBe('101 - cento e um');
    expect(integerToText.convert(111)).toBe('111 - cento e onze');
    expect(integerToText.convert(145)).toBe('145 - cento e quarenta e cinco');
    expect(integerToText.convert(987)).toBe('987 - novecentos e oitenta e sete');
    expect(integerToText.convert(999)).toBe('999 - novecentos e noventa e nove');
  });
});
