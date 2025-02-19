Array.prototype.even= function(){
  return this.filter((num)=>  Number.isInteger(num) && num % 2 === 0);
}

console.log([1,2,3,4,5].even());
