import { describe, expect } from '@jest/globals';
import { uniqueSort } from "./uniqueSort";

describe('Unique sort', () => { 
  it('should return a sorted array with no duplicates', () => {
    expect(uniqueSort([1, 5, 2, 1])).toEqual([1, 2, 5]);
    expect(uniqueSort([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
  });  
})
