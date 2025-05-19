import { memoize } from "./utils/memoize";
import { Cache } from "./types/types.type";

// The UniqueSort function takes an array of numbers as input and returns a new array with the unique numbers sorted in ascending order.
// It uses a cache to keep track of the unique numbers that have already been added to the result array.
// The function iterates through the input array, checking if each number is already in the cache.
// If it is not, it adds the number to the cache and pushes it to the result array.
// Finally, it sorts the result array in ascending order and returns it.
// The time complexity of this function is O(n log n) due to the sorting step, and the space complexity is O(n) due to the cache and result array.

export const UniqueSort = memoize((arr: number[]): number[] => {
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
