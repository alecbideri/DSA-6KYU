function uniQueOrder(arr) {
  return [...new Set(arr)];
}

// alternative approach 

function unique(string){
  let seen = [];
  for (let char of string){
    if(!seen.includes(char)){
      seen.push(char);
    }
  }

  return seen;
}



// altrnative approach to consecutive duplicates

function unique(string){
  let seen = [];
  for (let char of string){
    if(seen[seen.length - 1] !== char){
      seen.push(char);
    }
  }

  return seen;
}

console.log(unique('aabbccddeeffaagg')); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
