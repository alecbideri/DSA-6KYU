function findChildren(string){
  return string.split('')
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).join('')
}

// A bove implementation without considering the case sensitivity


function FindChildren(string){
  return string.split('')
    .sort((a,b)=>{
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();

      if(lowerA === lowerB){
        return a===a.toUpperCase() ? -1 : 1;
      }
      return lowerA.localeCompare(lowerB);
    }).join('');
}

console.log(FindChildren('xXfuUuuF'));

