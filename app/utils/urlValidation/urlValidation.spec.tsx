import { isValidURL } from './urlValidation';

describe('isValidURL', () => {
  test('String with a valid URL should return true', () => {
    const stringWithURL: string = 'This is a text with a URL: https://www.example.com and also http://anotherexample.com';
    expect(isValidURL(stringWithURL)).toBe(true);
  });

  test('String without a URL should return false', () => {
    const stringWithoutURL: string = 'This is a text without a URL';
    expect(isValidURL(stringWithoutURL)).toBe(false);
  });
});