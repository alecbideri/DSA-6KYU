function longestConsec(strings, k) {
  if (k <= 0 || k > strarr.length) return ""; 

  let maxString = "";
  let maxLength = 0;

 
  for (let i = 0; i <= strarr.length - k; i++) {
    let currentString = strarr.slice(i, i + k).join(""); 
    if (currentString.length > maxLength) {
      maxLength = currentString.length;
      maxString = currentString;
    }
  }

  return maxString;

}

