function change(string){
  let newString = string.replace(/e/g, '!');
  return newString;
}




// other alternative 

function Change(string){
  let newString = string.split('');
  let anotherString = [];

  for (let i = 0 ; i < newString.length ; i++){
    if(newString[i] === 'e'){
      anotherString.push('!');
    }else {
      anotherString.push(newString[i]);
    }
  }

  return anotherString.join('');
}

 
// another 

function isStringNumber(value) {

  let number = 0 ;

  if ( typeof value === 'string' && !isNaN(value) && value.trim() !== '' ){
    number =  Number(value);
  }
  if (number > 1){
    throw new TypeError('n is  invalid');
  }else {
    return number;
  }

}


console.log(isStringNumber(3.5));
