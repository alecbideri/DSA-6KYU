function sqInrt(length , width){
   if (length===width){
    return null ;
   }

   let squares = [];

   while(length > 0 && width > 0){
    let sqrSize = Math.min(length, width);
    squares.push(sqrSize);

    if(length > width){
        length -= sqrSize;
   }else{
       width -= sqrSize;
   }

  }

  return squares;
}

console.log(sqInrt(5, 3)); // 10
