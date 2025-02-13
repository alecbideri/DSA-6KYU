let obj = {a:10 , b:20 , c:30};

for(let [keys , value] of Object.entries(obj)){
  console.log(`${keys} , ${value}`);
}