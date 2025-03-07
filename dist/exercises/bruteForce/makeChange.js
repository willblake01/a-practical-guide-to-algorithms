"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChange = void 0;
const utils_1 = require("../../utils");
exports.makeChange = (0, utils_1.memoize)((coins, amount) => {
    coins.sort((a, b) => b - a);
    if (amount === 0)
        return 0;
    let minCoins = Infinity;
    coins.forEach(coin => {
        if (amount - coin >= 0) {
            let currentMinCoins = (0, exports.makeChange)(coins, amount - coin);
            if (minCoins === Infinity || currentMinCoins < minCoins) {
                minCoins = currentMinCoins;
            }
            // Remove the coin from the array
            coins.shift();
        }
    });
    return minCoins + 1;
});
