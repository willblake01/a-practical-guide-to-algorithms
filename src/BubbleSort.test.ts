import {  BubbleSort } from './BubbleSort';

describe('BubbleSort', () => {
  it('should return an empty array when given an empty array', () => {
    expect(BubbleSort([])).toEqual([]);
  });

  it('should return the same array when given an array of one element', () => {
    expect(BubbleSort([1])).toEqual([1]);
    expect(BubbleSort([0])).toEqual([0]);
    expect(BubbleSort([-1])).toEqual([-1]);
    expect(BubbleSort([100])).toEqual([100]);
    expect(BubbleSort([0.5])).toEqual([0.5]);
    expect(BubbleSort([1.5])).toEqual([1.5]);
    expect(BubbleSort([-0.5])).toEqual([-0.5]);
    expect(BubbleSort([-1.5])).toEqual([-1.5]);
  });

  it('should sort an array with positive numbers', () => {
    expect(BubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(BubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(BubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]); 
    expect(BubbleSort([5, 3, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 8]);
    expect(BubbleSort([5, 3, 8, 2, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 7, 8]);
  });

  it('should sort an array with negative numbers', () => {
    expect(BubbleSort([-1, -2, -3])).toEqual([-3, -2, -1]);
    expect(BubbleSort([1, -2, 3])).toEqual([-2, 1, 3]);
    expect(BubbleSort([5, -3, 8, -2, 1, 4])).toEqual([-3, -2, 1, 4, 5, 8]);
    expect(BubbleSort([5, -3, 8, -2, 1, 4, -7])).toEqual([-7, -3, -2, 1, 4, 5, 8]);
  });

  it('should sort an array with duplicate numbers', () => {
    expect(BubbleSort([1, 2, 2, 3])).toEqual([1, 2, 2, 3]);
    expect(BubbleSort([5, 3, 8, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5, 5, 8]);
    expect(BubbleSort([5, -3, -3, -2, -2, -1])).toEqual([-3, -3, -2, -2, -1, 5]);
    expect(BubbleSort([5, -3, -3, -2, -2])).toEqual([-3, -3, -2, -2, 5]);
    expect(BubbleSort([5])).toEqual([5]);
    expect(BubbleSort([0.5])).toEqual([0.5]);
    expect(BubbleSort([-0.5])).toEqual([-0.5]);
    expect(BubbleSort([-1.5])).toEqual([-1.5]);
  });
});
