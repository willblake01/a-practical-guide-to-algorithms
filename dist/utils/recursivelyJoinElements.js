"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursivelyJoinElements = void 0;
const memoize_1 = require("./memoize");
exports.recursivelyJoinElements = (0, memoize_1.memoize)((elements, separator) => {
    const recurse = (index, resultSoFar) => {
        resultSoFar += elements[index];
        if (index === elements.length - 1) {
            return resultSoFar;
        }
        else {
            return recurse(index + 1, resultSoFar + separator);
        }
    };
    return recurse(0, '');
});
