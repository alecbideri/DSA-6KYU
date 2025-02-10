function longestPalindrome(string){
 if(string.length === 0){
  return 0 ;
 }

 let longest = '';
 for (var i = 0 ; i < string.length ; i++){
   for(var j = i+1 ; j <= string.length ; j++){
     let substr = string.slice(i,j);
     if(substr.length > longest.length && substr === substr.split('').reverse().join('')){
       longest = substr;
     }
   }
 }

 return longest.length;

}

console.log(longestPalindrome('')); // 7

