export const iterativelyJoinElements = (elements: string[], separator: string): string => {
  let result = '';
  for (let i = 0; i < elements.length; i++) {
    result += elements[i];
    if (i < elements.length - 1) {
      result += separator;
    }
  }
  return result;
}
