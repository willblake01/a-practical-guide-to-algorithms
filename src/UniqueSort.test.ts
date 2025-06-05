import { describe, expect } from '@jest/globals';
import { UniqueSort } from './UniqueSort';

describe('Unique sort', () => { 
  it('should return a sorted array with no duplicates', () => {
    expect(UniqueSort([])).toEqual([]);
    expect(UniqueSort([1])).toEqual([1]);
    expect(UniqueSort([1, 5, 2, 1])).toEqual([1, 2, 5]);
    expect(UniqueSort([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
    expect(UniqueSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(UniqueSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(UniqueSort([1, 2, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
    expect(UniqueSort([1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(UniqueSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(UniqueSort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(UniqueSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(UniqueSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(UniqueSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
})
