function inRange(arr, min, max) {
  return arr.filter((num) => num >= min && num <= max);
}

// Example usage:
console.log(inRange([1, 5, 10, 15], 5, 10)); // [5, 10]
