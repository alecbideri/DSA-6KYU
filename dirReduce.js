function dirReduce(str){
  let stack = [];
  let opposites = {'NORTH' : 'SOUTH' , 'SOUTH' : 'NORTH' , 'WEST' : 'EAST' , 'EAST' : 'WEST'}

  for (let i = 0 ; i < str.length ; i++){
    if(stack[stack.length - 1] === opposites[str[i]]){
      stack.pop();
    }else{
      stack.push(str[i])
    }
  }

  return stack;
}

console.log(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
