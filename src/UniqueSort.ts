import { memoize } from "./utils/memoize";
// It should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4, 2, 2, 3, 2, 2, 2] => output: [2, 3, 4]

interface Cache {
  [key: number]: boolean;
}

export const uniqueSort = memoize((arr: number[]): number[] => {
  const cache: Cache = {};
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result.sort((a: number, b: number) => a - b);
})
