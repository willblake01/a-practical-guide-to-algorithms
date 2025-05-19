"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const UniqueSort_1 = require("./UniqueSort");
(0, globals_1.describe)('Unique sort', () => {
    it('should return a sorted array with no duplicates', () => {
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([])).toEqual([]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1])).toEqual([1]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 5, 2, 1])).toEqual([1, 2, 5]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        (0, globals_1.expect)((0, UniqueSort_1.UniqueSort)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
