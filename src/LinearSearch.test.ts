import {  LinearSearch } from './LinearSearch';

describe('LinearSearch', () => {
  it('should return -1 when the list is empty', () => {
    expect(LinearSearch([], 1)).toBe(-1);
  });

  it('should return the index of the item in the list', () => {
    expect(LinearSearch([1], 1)).toBe(0);
    expect(LinearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('should return -1 if the item is not in the list', () => {
    expect(LinearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('should return the index of the first occurrence of the item in the list', () => {
    expect(LinearSearch([1, 2, 3, 4, 5, 3], 3)).toBe(2);
  });
});
