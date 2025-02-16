function race(v1,v2 ,g){
  if (v1 >=v2) {
    return [-1,-1,-1];
  }

  let totalSeconds = Math.floor(g/(v2-v1) * 3600);
  let Hours = Math.floor(totalSeconds/3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60 ;

  return [Hours,minutes,seconds];
}

console.log(race(720,850,70));
