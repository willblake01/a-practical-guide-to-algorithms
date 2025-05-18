"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort_1 = require("./mergeSort");
describe("mergeSort", () => {
    it("should return an empty array when given an empty array", () => {
        expect((0, mergeSort_1.mergeSort)([])).toEqual([]);
    });
    it("should return the same array when given an array of one element", () => {
        expect((0, mergeSort_1.mergeSort)([1])).toEqual([1]);
        expect((0, mergeSort_1.mergeSort)([0])).toEqual([0]);
        expect((0, mergeSort_1.mergeSort)([-1])).toEqual([-1]);
        expect((0, mergeSort_1.mergeSort)([100])).toEqual([100]);
        expect((0, mergeSort_1.mergeSort)([0.5])).toEqual([0.5]);
        expect((0, mergeSort_1.mergeSort)([1.5])).toEqual([1.5]);
        expect((0, mergeSort_1.mergeSort)([-0.5])).toEqual([-0.5]);
        expect((0, mergeSort_1.mergeSort)([-1.5])).toEqual([-1.5]);
    });
    it("should sort an array", () => {
        expect((0, mergeSort_1.mergeSort)([1, 2, 3])).toEqual([1, 2, 3]);
        expect((0, mergeSort_1.mergeSort)([3, 2, 1])).toEqual([1, 2, 3]);
        expect((0, mergeSort_1.mergeSort)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        expect((0, mergeSort_1.mergeSort)([5, 3, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 8]);
        expect((0, mergeSort_1.mergeSort)([5, 3, 8, 2, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 7, 8]);
    });
    it("should sort an array with negative numbers", () => {
        expect((0, mergeSort_1.mergeSort)([-1, -2, -3])).toEqual([-3, -2, -1]);
        expect((0, mergeSort_1.mergeSort)([1, -2, 3])).toEqual([-2, 1, 3]);
        expect((0, mergeSort_1.mergeSort)([5, -3, 8, -2, 1, 4])).toEqual([-3, -2, 1, 4, 5, 8]);
        expect((0, mergeSort_1.mergeSort)([5, -3, 8, -2, 1, 4, -7])).toEqual([-7, -3, -2, 1, 4, 5, 8]);
    });
    it("should sort an array with duplicate numbers", () => {
        expect((0, mergeSort_1.mergeSort)([3, 2, 2, 1])).toEqual([1, 2, 2, 3]);
        expect((0, mergeSort_1.mergeSort)([5, 3, 8, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5, 5, 8]);
        expect((0, mergeSort_1.mergeSort)([5, -3, -3, -2, -2, -1])).toEqual([-3, -3, -2, -2, -1, 5]);
        expect((0, mergeSort_1.mergeSort)([5, -3, -3, -2, -2])).toEqual([-3, -3, -2, -2, 5]);
    });
});
