function longestConsec(strings , k){
  
  if(k<= 0 || k > strings.length){
    return '';
  }

  let sortedString = strings.sort((a,b)=> b.length - a.length);
  return sortedString.slice(0, k).join('');

}

console.log(longestConsec(['Hello' , 'longest' , 'hi'] , 3));
