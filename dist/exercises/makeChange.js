"use strict";
// Greedy algorithms always make the locally optimal choice
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChange = void 0;
// Write a function, make change, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.
// coin values: 5, 10, 25
// input amount: 40, output number of coins: 3 (25, 10, 5)
// input amount: 35, output number of coins: 2 (25, 10)
const makeChange = (coins, amount) => {
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
};
exports.makeChange = makeChange;
