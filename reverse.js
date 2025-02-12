function reverse(string){
  
  if(string.trim().length === 0){
    return '';
  }
  
  let newString = string.split(' ');
  let newArray = [];

  for(let i = 1 ; i < newString.length ; i+=2){
    newString[i] = newString[i].split('').reverse().join('');
  }

  return newString.join(' ');
}

console.log(reverse("  ")); // sihT is a elpmis test gnirts to etamrofni
