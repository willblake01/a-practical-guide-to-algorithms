"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinearSearch_1 = require("./LinearSearch");
describe('linearSearch', () => {
    it('should return the index of the item in the list', () => {
        expect((0, LinearSearch_1.linearSearch)([1, 2, 3, 4, 5], 3)).toBe(2);
    });
    it('should return -1 if the item is not in the list', () => {
        expect((0, LinearSearch_1.linearSearch)([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
});
