"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
const memoize_1 = require("./utils/memoize");
exports.linearSearch = (0, memoize_1.memoize)((list, item) => {
    let index = -1;
    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i;
        }
    });
    return index;
});
