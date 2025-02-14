function recursive(number){
  while(number >= 10) {
   number = number.toString().split('').reduce((sum , digit)=> sum + parseInt(digit ,10),0);
  }

  return number;
}

console.log(recursive(25));
