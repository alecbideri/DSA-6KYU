function high(string){
  let words = string.split(' ');
  let maxScore = 0 , maxWord = words[0];

  for (let word of words){
    let score = [...word].reduce((sum , char)=> sum + char.charCodeAt(0) - 96 , 0);
    if(score > maxScore){
      maxScore = score;
      maxWord = word;
    }
  }

  return maxWord;
}


console.log(high('aa b'));
