import { bubbleSortOptimized } from "./bubbleSortOptimized";

describe('bubbleSortOptimized', () => {
  it('should sort an array of numbers', () => {
    expect(bubbleSortOptimized([5, 3, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 8]);
    expect(bubbleSortOptimized([5, 3, 8, 2, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 7, 8]);
  });
});
