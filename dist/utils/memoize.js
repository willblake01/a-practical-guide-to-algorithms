"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
const cache = {};
const memoize = (func) => {
    return (...args) => {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        else {
            const result = func(...args);
            cache[key] = result;
            return result;
        }
    };
};
exports.memoize = memoize;
