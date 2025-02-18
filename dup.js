function dup(string){
 let newArray = [];

 for (let word of string){ 
  newArray.push(word.split("").filter((char , index , arr)=> char!==arr[index-1]).join(""));
 }

 return newArray;
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));
