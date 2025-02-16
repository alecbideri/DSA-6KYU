function same(a,b){

  if (!a || !b || a.length !== b.length) return false;
  
  let newArray = a.map((x)=> x*x);
  newArray.sort();
  let comArray = b.sort();

 return JSON.stringify(newArray) === JSON.stringify(comArray);

}

console.log(same([121, 144, 19, 161, 19, 144, 19, 11]  , [132, 14641, 20736, 361, 25921, 361, 20736, 361]));
