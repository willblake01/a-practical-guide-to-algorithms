"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const UniqueSort_1 = require("./UniqueSort");
(0, globals_1.describe)('Unique sort', () => {
    it('should return a sorted array with no duplicates', () => {
        (0, globals_1.expect)((0, UniqueSort_1.uniqueSort)([1, 5, 2, 1])).toEqual([1, 2, 5]);
        (0, globals_1.expect)((0, UniqueSort_1.uniqueSort)([4, 2, 2, 3, 2, 2, 2])).toEqual([2, 3, 4]);
    });
});
