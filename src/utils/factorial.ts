import { memoize } from "./memoize";

export const factorial = memoize((n: number): number => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});
