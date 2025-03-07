"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeChange_1 = require("./makeChange");
describe('makeChange', () => {
    it('should return the least number of coins that add up to an amount', () => {
        expect((0, makeChange_1.makeChange)([1, 6, 10], 12)).toBe(3);
        expect((0, makeChange_1.makeChange)([1, 6, 10], 11)).toBe(2);
        expect((0, makeChange_1.makeChange)([1, 6, 10], 13)).toBe(4);
        expect((0, makeChange_1.makeChange)([1, 6, 10], 17)).toBe(3);
        expect((0, makeChange_1.makeChange)([1, 6, 10], 22)).toBe(4);
    });
});
