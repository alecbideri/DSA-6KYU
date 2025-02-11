function minimumNumber(number){
  function isPrime(num){
    if (num<=1) return false ;
    if (num<=3) return true ; 

    if(num%2===0 || num%3===0) return false ;

    for(var i = 5 ; i * i <= num ; i+=6){
      if(num %i === 0 || num%(i+2) === 0) return false ;
    }

    return true ;
  }

  var sum = number.reduce((acc, cur)=> acc+cur , 0);

  let add = 0 ;

  while (!isPrime(sum + add)){
    add++
  }

  return add ;
}

console.log(minimumNumber([2,12,8,4,6])); // 1
