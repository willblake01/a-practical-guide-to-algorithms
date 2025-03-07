import { makeChange } from './makeChange';

describe('makeChange', () => {
  it('should return the least number of coins that add up to the amount and are divisible', () => {
    expect(makeChange([5, 10, 25], 5)).toBe(1);
    expect(makeChange([5, 10, 25], 10)).toBe(1);
    expect(makeChange([5, 10, 25], 15)).toBe(2);
    expect(makeChange([5, 10, 25], 20)).toBe(2);
    expect(makeChange([5, 10, 25], 25)).toBe(1);
    expect(makeChange([5, 10, 25], 30)).toBe(2);
    expect(makeChange([5, 10, 25], 35)).toBe(2);
    expect(makeChange([5, 10, 25], 40)).toBe(3);
    expect(makeChange([5, 10, 25], 45)).toBe(3);
    expect(makeChange([5, 10, 25], 50)).toBe(2);
    expect(makeChange([3, 6, 12], 18)).toBe(2);
  });
});
