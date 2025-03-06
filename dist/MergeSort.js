"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
const memoize_1 = require("./utils/memoize");
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
exports.mergeSort = (0, memoize_1.memoize)((arr) => {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const sortedLeft = (0, exports.mergeSort)(left);
    const sortedRight = (0, exports.mergeSort)(right);
    return merge((0, exports.mergeSort)(sortedLeft), (0, exports.mergeSort)(sortedRight));
});
