function sqInRect(length, width) {
  if (length === width) return null; // If it's a square, return null

  let squares = [];
  
  while (length > 0 && width > 0) {
    let squareSize = Math.min(length, width); // Get the largest square possible
    squares.push(squareSize);

    // Reduce the rectangle size by removing the square
    if (length > width) {
      length -= squareSize;
    } else {
      width -= squareSize;
    }
 
  }

  return squares;
  
}

console.log(sqInRect(5, 3));
