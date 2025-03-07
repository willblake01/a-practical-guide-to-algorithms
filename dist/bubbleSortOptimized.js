"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSortOptimized = void 0;
const memoize_1 = require("./utils/memoize");
exports.bubbleSortOptimized = (0, memoize_1.memoize)((arr) => {
    let countOuter = 0;
    let countInner = 0;
    let countSwap = 0;
    let swapped;
    do {
        countOuter++;
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            countInner++;
            if (arr[i] > arr[i + 1]) {
                countSwap++;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
});
