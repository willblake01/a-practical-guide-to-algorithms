import { describe, expect } from '@jest/globals';
import { uniqueSort } from "./uniqueSort";

describe('Unique sort', () => { 
  it('should return a sorted array with no duplicates', () => {
    expect(uniqueSort([])).toEqual([]);
    expect(uniqueSort([1])).toEqual([1]);
    expect(uniqueSort([1, 5, 2, 1])).toEqual([1, 2, 5]);
    expect(uniqueSort([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
    expect(uniqueSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueSort([1, 2, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueSort([1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(uniqueSort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(uniqueSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(uniqueSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(uniqueSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
})
