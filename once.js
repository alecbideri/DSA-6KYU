// high order functions 

function once(fn){
  let called = false ;

  return function (...args){
    if(!called){
      called = true ;
      return fn.apply(this, args);
    }
    return undefined;
  };
}

console.log(once(function(a,b,c){console.log(a,b,c)})(1,2,3));
