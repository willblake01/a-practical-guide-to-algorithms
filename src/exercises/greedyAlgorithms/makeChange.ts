import { memoize } from "../../utils";

// Greedy algorithms always make the locally optimal choice

// Write a function, make change, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5

export const makeChange = memoize((coins: number[], amount: number): number => {
  if (amount === 0 || coins.length === 0) return 0;

  coins.sort((a, b) => b - a);
  
  let coinCount = 0;
  let i = 0

  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinCount++;
    } else {
      i++;
    }
  }
  
  return coinCount;
})
