function isIntArray(arr){
 if(!Array.isArray(arr)){
  return false;
 }

 return arr.every(num=>Number.isInteger(num));
}

console.log(isIntArray([1,2,3,4]));
