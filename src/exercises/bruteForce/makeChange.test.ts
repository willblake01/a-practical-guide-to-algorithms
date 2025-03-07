import {  makeChange } from './makeChange';

describe('makeChange', () => {
  it('should return the least number of coins that add up to an amount', () => {
    expect(makeChange([1, 6, 10], 12)).toBe(3);
    expect(makeChange([1, 6, 10], 11)).toBe(2);
    expect(makeChange([1, 6, 10], 13)).toBe(4);
    expect(makeChange([1, 6, 10], 17)).toBe(3);
    expect(makeChange([1, 6, 10], 22)).toBe(4);
    expect(makeChange([1, 6, 10], 0)).toBe(0);
    expect(makeChange([], 22)).toBe(0);
  });
});
