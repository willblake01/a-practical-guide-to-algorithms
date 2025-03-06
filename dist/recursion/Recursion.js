"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = exports.joinElements = void 0;
const memoize_1 = require("../utils/memoize");
exports.joinElements = (0, memoize_1.memoize)((elements, separator) => {
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
exports.factorial = (0, memoize_1.memoize)((n) => {
    const recurse = (n, resultSoFar) => {
        if (n === 0) {
            return resultSoFar;
        }
        else {
            return recurse(n - 1, resultSoFar * n);
        }
    };
    return recurse(n, 1);
});
