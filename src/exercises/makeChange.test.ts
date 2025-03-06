import { makeChange } from './makeChange';

describe('makeChange', () => {
  it('should return the least number of coins that add up to the amount', () => {
    expect(makeChange([5, 10, 25], 5)).toBe(1);
    expect(makeChange([5, 10, 25], 10)).toBe(1);
    expect(makeChange([5, 10, 25], 15)).toBe(2);
    expect(makeChange([5, 10, 25], 20)).toBe(2);
    expect(makeChange([5, 10, 25], 25)).toBe(1);
  });
});
