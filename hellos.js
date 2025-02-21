function longestConsec(strings, k) {
  if (k <= 0 || k > strings.length) return "";

  let maxString = "";
  let maxLength = 0;

  for (let i = 0; i <= strings.length - k; i++) {
    let currentString = strings.slice(i, i + k).join(""); 
      maxLength = currentString.length;
      maxString = currentString;
    }

    return maxString;
  }

