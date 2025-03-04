"use strict";
// It should not return any duplicate values in the sorted array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSort = void 0;
const uniqueSort = (arr) => {
    const cache = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            cache[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result.sort((a, b) => a - b);
};
exports.uniqueSort = uniqueSort;
