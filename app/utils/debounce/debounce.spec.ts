import { jest, test, expect } from '@jest/globals';
import { debounce } from './debounce';

jest.useFakeTimers();

const mockFunction = jest.fn();

const debouncedMockFunction = debounce(mockFunction, 500);

test('Debounced function should not be called immediately', () => {
  debouncedMockFunction(1, 2, 3);
  expect(mockFunction).not.toBeCalled();
});

test('Debounced function should be called after the delay', () => {
  debouncedMockFunction(4, 5, 6);
  jest.runAllTimers();
  expect(mockFunction).toBeCalledWith(4, 5, 6);
});

test('Debounced function should be called only once within the delay', () => {
  debouncedMockFunction(7, 8, 9);
  debouncedMockFunction(10, 11, 12);
  jest.runAllTimers();
  expect(mockFunction).toBeCalledWith(10, 11, 12);
  expect(mockFunction).toBeCalledTimes(1);
});

afterEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});
