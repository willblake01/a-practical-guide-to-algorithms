"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueSort = void 0;
const utils_1 = require("./utils");
// The UniqueSort function takes an array of numbers as input and returns a new array with the unique numbers sorted in ascending order.
// It uses a cache to keep track of the unique numbers that have already been added to the result array.
// The function iterates through the input array, checking if each number is already in the cache.
// If it is not, it adds the number to the cache and pushes it to the result array.
// Finally, it sorts the result array in ascending order and returns it.
// The time complexity of this function is O(n log n) due to the sorting step, and the space complexity is O(n) due to the cache and result array.
exports.UniqueSort = (0, utils_1.memoize)((arr) => {
    const cache = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            cache[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result.sort((a, b) => a - b);
});
