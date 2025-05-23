import { memoize } from "./memoize";

export const recursivelyJoinElements = memoize((elements: string[], separator: string): string => {
  const recurse = (index: number, resultSoFar: string): string => {
    resultSoFar += elements[index];

    if (index === elements.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + separator);
    }
  }

  return recurse(0, '');
})
