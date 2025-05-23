"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeChange_1 = require("./makeChange");
describe('makeChange', () => {
    it('should return the least number of coins that add up to the amount and are divisible', () => {
        expect((0, makeChange_1.makeChange)([5, 10, 25], 5)).toBe(1);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 10)).toBe(1);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 15)).toBe(2);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 20)).toBe(2);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 25)).toBe(1);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 30)).toBe(2);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 35)).toBe(2);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 40)).toBe(3);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 45)).toBe(3);
        expect((0, makeChange_1.makeChange)([5, 10, 25], 50)).toBe(2);
        expect((0, makeChange_1.makeChange)([3, 6, 12], 18)).toBe(2);
        expect((0, makeChange_1.makeChange)([3, 6, 12], 0)).toBe(0);
        expect((0, makeChange_1.makeChange)([], 18)).toBe(0);
    });
});
