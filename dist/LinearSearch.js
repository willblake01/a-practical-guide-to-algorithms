"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearSearch = void 0;
const memoize_1 = require("./utils/memoize");
// The LinearSearch function takes an array of numbers and a target number as input.
// It iterates through the array and checks if each element is equal to the target number.
// If it finds a match, it returns the index of the matching element.
// If it does not find a match, it returns -1.
// The time complexity of this function is O(n) because it may need to check every element in the array in the worst case.
// The space complexity is O(1) because it only uses a constant amount of extra space for the index variable.
exports.LinearSearch = (0, memoize_1.memoize)((list, item) => {
    let index = -1;
    list.forEach((listItem, i) => {
        // If the item is found, set the index to the index of the first occurrence
        if (listItem === item && index === -1) {
            index = i;
        }
    });
    return index;
});
