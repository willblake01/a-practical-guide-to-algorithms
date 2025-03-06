"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleSort_1 = require("./BubbleSort");
describe('bubbleSort', () => {
    it('should sort an array', () => {
        expect((0, BubbleSort_1.bubbleSort)([3, 2, 1])).toEqual([1, 2, 3]);
    });
});
