"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
const utils_1 = require("./utils");
// Merge sort is a divide and conquer algorithm that sorts an array by recursively dividing it into halves, sorting each half, and then merging the sorted halves back together.
// It has a time complexity of O(n log n) and a space complexity of O(n).
// It is a stable sort, meaning that it preserves the relative order of equal elements.
// It is not an in-place sort, meaning that it requires additional space to store the sorted array.
// It is a good choice for large datasets and is often used in external sorting algorithms.
// Merge sort is not a good choice for small datasets, as the overhead of the recursive calls and merging can be more expensive than simpler algorithms like insertion sort or selection sort.
// Merge sort is a good choice for linked lists, as it does not require random access to the elements and can be implemented in O(1) space.
// Merge sort is a good choice for sorting large datasets that do not fit into memory, as it can be implemented as an external sort that uses disk space to store the sorted data.
// Merge sort is a good choice for sorting data that is already partially sorted, as it can take advantage of the existing order to reduce the number of comparisons and swaps needed to sort the data.
const merge = (left, right) => {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        }
        else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};
exports.MergeSort = (0, utils_1.memoize)((arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const sortedLeft = (0, exports.MergeSort)(left);
    const sortedRight = (0, exports.MergeSort)(right);
    return merge((0, exports.MergeSort)(sortedLeft), (0, exports.MergeSort)(sortedRight));
});
