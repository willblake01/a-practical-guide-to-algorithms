"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSortOptimized_1 = require("./bubbleSortOptimized");
describe('bubbleSortOptimized', () => {
    it('should sort an array of numbers', () => {
        expect((0, bubbleSortOptimized_1.bubbleSortOptimized)([5, 3, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 8]);
        expect((0, bubbleSortOptimized_1.bubbleSortOptimized)([5, 3, 8, 2, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 7, 8]);
    });
});
