"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const memoize_1 = require("./utils/memoize");
exports.bubbleSort = (0, memoize_1.memoize)((arr) => {
    let countOuter = 0;
    let countInner = 0;
    let countSwap = 0;
    for (let i = 0; i < arr.length; i++) {
        countOuter++;
        for (let j = 1; j < arr.length; j++) {
            countInner++;
            if (arr[j - 1] > arr[j]) {
                countSwap++;
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }
    return arr;
});
