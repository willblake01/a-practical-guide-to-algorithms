interface Cache {
  [key: string]: any;
}

const cache: Cache = {};

export const memoize = (func: Function) => {
  return (...args: any[]) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log('Fetching from cache:', key);
      return cache[key];
    } else {
      console.log('Calculating result:', key);
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  }
}
