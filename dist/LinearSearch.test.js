"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearSearch_1 = require("./linearSearch");
describe('linearSearch', () => {
    it('should return -1 when the list is empty', () => {
        expect((0, linearSearch_1.linearSearch)([], 1)).toBe(-1);
    });
    it('should return the index of the item in the list', () => {
        expect((0, linearSearch_1.linearSearch)([1], 1)).toBe(0);
        expect((0, linearSearch_1.linearSearch)([1, 2, 3, 4, 5], 3)).toBe(2);
    });
    it('should return -1 if the item is not in the list', () => {
        expect((0, linearSearch_1.linearSearch)([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
    it('should return the index of the first occurrence of the item in the list', () => {
        expect((0, linearSearch_1.linearSearch)([1, 2, 3, 4, 5, 3], 3)).toBe(2);
    });
});
