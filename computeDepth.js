function computeDepth(x){


    let seenDigits = new Set();
    let i = 1 ;

    while (seenDigits.size < 10){
        let multiple = x * i ;
        let digits = multiple.toString().split('');

        for (let digit of digits){
            seenDigits.add(digit);
        }

        if(seenDigits.size === 10 ){
            return i ;
        }

        i++ ;
    }
}

console.log(computeDepth(42));