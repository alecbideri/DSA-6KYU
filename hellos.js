function bouncing(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;

  let times = 1; 

  while (h * bounce > window) { 
    h *= bounce;  
    times += 2;   
  }

  return times;
}

console.log(bouncing(3.0, 0.66, 1.5)); 
