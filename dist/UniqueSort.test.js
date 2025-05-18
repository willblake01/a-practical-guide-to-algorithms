"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const uniqueSort_1 = require("./uniqueSort");
(0, globals_1.describe)('Unique sort', () => {
    it('should return a sorted array with no duplicates', () => {
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([])).toEqual([]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1])).toEqual([1]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 5, 2, 1])).toEqual([1, 2, 5]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        (0, globals_1.expect)((0, uniqueSort_1.uniqueSort)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
