function removeNb(n) {
  let S = (n * (n + 1)) / 2; 
  let result = [];

  for (let a = 1; a <= n; a++) {
    let b = (S - a) / (a + 1); 

    if (b > 0 && b <= n && Number.isInteger(b)) {
      result.push([a, b]);
    }
  }

  return result;
}

console.log(removeNb(26));
