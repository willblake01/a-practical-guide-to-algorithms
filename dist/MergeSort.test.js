"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort_1 = require("./mergeSort");
describe("MergeSort", () => {
    it("should sort an array", () => {
        expect((0, mergeSort_1.mergeSort)([3, 2, 1])).toEqual([1, 2, 3]);
    });
});
