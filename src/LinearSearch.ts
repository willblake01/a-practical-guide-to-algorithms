import { memoize } from "./utils/memoize";

export const linearSearch = memoize((list: number[], item: number): number => {
  let index = -1;

  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i; 
    }
  })

  return index;
})
