function highestRank(arr){
  let freqMap = {};

  for (let num of arr){
    freqMap[num] = (freqMap[num] || 0) + 1;

  }

  let maxFreq = 0 ;
  let maxNum = 0;

  for(let num in freqMap){
    if(freqMap[num] >= maxFreq){
      maxFreq = freqMap[num];
      maxNum = num;
    }
  }

  return parseInt(maxNum);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
