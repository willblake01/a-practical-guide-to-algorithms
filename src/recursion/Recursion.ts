import { memoize } from "../utils/memoize";

export const joinElements = memoize((elements: string[], separator: string): string => {
  const recurse = (index: number, resultSoFar: string) => {
    resultSoFar += elements[index];

    if (index === elements.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + separator);
    }
  }

  return recurse(0, '');
})

export const factorial = memoize((n: number): number => {
    const recurse = (n: number, resultSoFar: number): number => {
      if (n === 0) {
        return resultSoFar;
      } else {
        return recurse(n - 1, resultSoFar * n);
      }
    }

    return recurse(n, 1);
});
