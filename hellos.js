function fibonacci(number){
  const newNumber = parseInt(number);

  let newArray = [];

  let n1 = 0 , n2 = 1 , nextTerm = n1 + n2 ;
  newArray = [n1,n2];
  
  while (nextTerm <= number){
    n1 = n2 ;
    n2 = nextTerm;
    nextTerm = n1 + n2 ;
    newArray.push(nextTerm);

  }

  return newArray;

}

console.log(fibonacci(5));
