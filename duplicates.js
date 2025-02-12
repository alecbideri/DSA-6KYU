function count(text){
  let charCount = {};
  let lowerText = text.toLowerCase();

  for(let char of lowerText){
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let duplicateCount = Object.values(charCount).filter(val => val > 1).length;

  return duplicateCount;
}

console.log(count('invisibility'));
