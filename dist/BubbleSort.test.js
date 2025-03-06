"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = require("./bubbleSort");
describe('bubbleSort', () => {
    it('should sort an array', () => {
        expect((0, bubbleSort_1.bubbleSort)([3, 2, 1])).toEqual([1, 2, 3]);
    });
});
