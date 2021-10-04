const binarySearch = require("./binarysearch");

//if element is present in the array

test("should return position of element in array", () => {
  expect(binarySearch([15, 20, 34, 44, 56, 69, 71, 82, 96, 104], 56)).toBe(5);
});

//if element is not present in array
test("should return -1", () => {
  expect(binarySearch([15, 20, 34, 44, 56, 69, 71, 82, 96, 104], 5)).toBe(-1);
});

//When Array is not an Array
test("should give an error when element is not array", () => {
  expect(() => {
    binarySearch(34, 5);
  }).toThrowError("Invalid Input");
});

//When array is not sorted
test("should give an error when array is not sorted", () => {
  expect(() => {
    binarySearch([1, 2, 7, 3, 5], 5);
  }).toThrowError("Array must be sorted");
});
