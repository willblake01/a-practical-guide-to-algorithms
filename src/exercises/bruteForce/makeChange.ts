import { memoize } from "../../utils";

export const makeChange = memoize((coins: number[], amount: number): number => {
  coins.sort((a, b) => b - a);

  if (amount === 0) return 0;

  let minCoins: number | undefined = undefined;

  coins.forEach(coin => {
    if (amount - coin >= 0) {
      let currentMinCoins = makeChange(coins, amount - coin);
      if (minCoins === undefined || currentMinCoins < minCoins) {
        minCoins = currentMinCoins;
      }
      // Remove the coin from the array
      coins.shift();
    }
  });

  return minCoins === undefined ? 0 : minCoins + 1;
});
