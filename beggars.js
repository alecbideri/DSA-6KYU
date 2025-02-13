function beggars(values , n){
  
  if(n===0){
    return [];
  }

  for(let value of values){
    result[index]  += value;
    index = (index+1) % n ;
  }

  let result = new Array(n).fill(0);
  let index = 0;


  for (let i = 0 ; i < values.length ; i++){
    result[index] += values[i];
    index = (index+1) % n;
  }

  return result;
}

console.log(beggars([1,2,3,4,5], 0));
