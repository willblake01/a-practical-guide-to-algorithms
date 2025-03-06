import {  bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
  it('should sort an array', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
