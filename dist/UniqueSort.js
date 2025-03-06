"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSort = void 0;
const memoize_1 = require("./utils/memoize");
exports.uniqueSort = (0, memoize_1.memoize)((arr) => {
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
