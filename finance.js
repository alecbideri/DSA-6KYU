function financez(n){
  return Array.from({length: n+1},(_,i)=>(n-i+1) * (4*i + n-i)/2)
    .reduce((sum , val)=>sum + val , 0);
}

console.log(financez(15));
