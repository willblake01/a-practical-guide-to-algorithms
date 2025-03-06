"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeChange_1 = require("./makeChange");
describe('makeChange', () => {
    it('should return the least number of coins that add up to the amount', () => {
        expect((0, makeChange_1.makeChange)([5, 10, 25], 5)).toBe(1);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 10)).toBe(1);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 15)).toBe(2);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 20)).toBe(2);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 25)).toBe(1);
    });
});
