const high = (str) => {
  const words = str.split(" ");
  let maxScore = 0;
  let maxWord = "";

  for (const word of words) {
    let score = [...word].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
    if(score > maxScore){
      maxScore = score;
      maxWord = word;
    }
  }

  return maxWord;
};

console.log(high('aa b'));
