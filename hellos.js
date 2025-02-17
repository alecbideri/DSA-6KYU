function bouncing(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;

  let times = 1; // First fall is always visible

  while (h * bounce > window) { 
    h *= bounce;  // Bounce up
    times += 2;   // Seen going up + seen falling down
  }

  return times;
}

console.log(bouncing(3.0, 0.66, 1.5)); // Output: 3
