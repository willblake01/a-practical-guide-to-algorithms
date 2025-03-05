"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinElements = void 0;
const joinElements = (elements, separator) => {
    let result = '';
    for (let i = 0; i < elements.length; i++) {
        result += elements[i];
        if (i < elements.length - 1) {
            result += separator;
        }
    }
    return result;
};
exports.joinElements = joinElements;
