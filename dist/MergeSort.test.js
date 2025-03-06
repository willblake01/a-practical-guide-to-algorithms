"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MergeSort_1 = require("./MergeSort");
describe("MergeSort", () => {
    it("should sort an array", () => {
        expect((0, MergeSort_1.mergeSort)([3, 2, 1])).toEqual([1, 2, 3]);
    });
});
