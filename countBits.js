function countBits(number){
  let string = number.toString(2);
  
  let count = 0 ; 

  for(var i = 0 ; i < string.length ; i++){
    if(string[i] === '1'){
      count++;
    }
  }

  return count;
}

console.log(countBits(3)); // 2
