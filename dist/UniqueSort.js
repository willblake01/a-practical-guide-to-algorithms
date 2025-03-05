"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizedUniqueSort = void 0;
const memoize_1 = require("./utils/memoize");
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
exports.memoizedUniqueSort = (0, memoize_1.memoize)(uniqueSort);
