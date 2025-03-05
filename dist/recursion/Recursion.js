"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinElements = void 0;
const joinElements = (elements, separator) => {
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
};
exports.joinElements = joinElements;
