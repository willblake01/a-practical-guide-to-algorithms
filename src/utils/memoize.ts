import { Cache } from '../types/types.type';

const cache: Cache = {};

export const memoize = (func: Function) => {
  return (...args: unknown[]) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  }
}
