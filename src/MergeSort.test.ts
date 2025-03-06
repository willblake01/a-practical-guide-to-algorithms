import { mergeSort } from "./mergeSort";

describe("MergeSort", () => {
  it("should sort an array", () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
