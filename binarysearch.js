const binarySearch = (list, item) => {
  if (!Array.isArray(list) || typeof item !== "number")
    throw new Error("Invalid Input");
  let low = 0;
  let high = list.length;

  const sortedArray = [...list].sort((a, b) => a - b);

  for (let i = 0; i < list.length; i++) {
    if (list[i] !== sortedArray[i]) throw new Error("Array must be sorted");
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid + 1;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1; //if not found
};

module.exports = binarySearch;
