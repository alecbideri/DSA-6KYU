// function sortMe(names){
//  let newArray = [];

//  for(char of names){
//   newArray.push(char.toLocaleLowerCase());
//  }

//   return newArray.sort();
// }




// another approach to return this in the original approach 

// function sortMe(names){
//   return names.sort((a,b) => a.localeCompare(b));
// }


// last approach 

function sortMe(names){
  let newMap = names.map(word=>({original:word, lower:word.toLowerCase()}));
  newMap.sort((a,b)=>a.lower.localeCompare(b.lower));

  return newMap.map(word=>word.original);
}

console.log(sortMe(["HTML", "JavaScript", "CSS"]));

