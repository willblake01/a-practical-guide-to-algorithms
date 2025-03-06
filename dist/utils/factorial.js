"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
const memoize_1 = require("./memoize");
exports.factorial = (0, memoize_1.memoize)((n) => {
    if (n === 0) {
        return 1;
    }
    else {
        return n * (0, exports.factorial)(n - 1);
    }
});
