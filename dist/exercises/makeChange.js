"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChange = void 0;
const utils_1 = require("../utils");
// Greedy algorithms always make the locally optimal choice
// Write a function, make change, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5
exports.makeChange = (0, utils_1.memoize)((coins, amount) => {
    let coinCount = 0;
    let i = coins.length - 1;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinCount++;
        }
        else {
            i--;
        }
    }
    return coinCount;
});
