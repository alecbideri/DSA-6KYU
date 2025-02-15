function rotate(string){
  let rotations = [];

  for(let i = 1 ; i < string.length + 1 ; i++){
    let rotation = string.slice(i) + string.slice(0,i);
    rotations.push(rotation);
  }

  return rotations;
}

console.log(rotate('hello'));
