"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearSearch_1 = require("./linearSearch");
describe('linearSearch', () => {
    it('should return the index of the item in the list', () => {
        expect((0, linearSearch_1.linearSearch)([1, 2, 3, 4, 5], 3)).toBe(2);
    });
    it('should return -1 if the item is not in the list', () => {
        expect((0, linearSearch_1.linearSearch)([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
});
