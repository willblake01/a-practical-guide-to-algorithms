import { MergeSort } from "./MergeSort";

describe("MergeSort", () => {
  it("should return an empty array when given an empty array", () => {
    expect(MergeSort([])).toEqual([]);
  });

  it("should return the same array when given an array of one element", () => {
    expect(MergeSort([1])).toEqual([1]);
    expect(MergeSort([0])).toEqual([0]);
    expect(MergeSort([-1])).toEqual([-1]);
    expect(MergeSort([100])).toEqual([100]);
    expect(MergeSort([0.5])).toEqual([0.5]);
    expect(MergeSort([1.5])).toEqual([1.5]);
    expect(MergeSort([-0.5])).toEqual([-0.5]);
    expect(MergeSort([-1.5])).toEqual([-1.5]);
  });

  it("should sort an array", () => {
    expect(MergeSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(MergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(MergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(MergeSort([5, 3, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 8]);
    expect(MergeSort([5, 3, 8, 2, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 7, 8]);
  });

  it("should sort an array with negative numbers", () => {
    expect(MergeSort([-1, -2, -3])).toEqual([-3, -2, -1]);
    expect(MergeSort([1, -2, 3])).toEqual([-2, 1, 3]);
    expect(MergeSort([5, -3, 8, -2, 1, 4])).toEqual([-3, -2, 1, 4, 5, 8]);
    expect(MergeSort([5, -3, 8, -2, 1, 4, -7])).toEqual([-7, -3, -2, 1, 4, 5, 8]);
  });

  it("should sort an array with duplicate numbers", () => {
    expect(MergeSort([3, 2, 2, 1])).toEqual([1, 2, 2, 3]);
    expect(MergeSort([5, 3, 8, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5, 5, 8]);
    expect(MergeSort([5, -3, -3, -2, -2, -1])).toEqual([-3, -3, -2, -2, -1, 5]);
    expect(MergeSort([5, -3, -3, -2, -2])).toEqual([-3, -3, -2, -2, 5]);
  });
});
