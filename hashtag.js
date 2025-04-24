function generateHashtag(str){

    if(str.length === 0){
        return false;
    }

    let result = str
        .split(' ')
        .filter(word => word)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');

    result = "#" + result;

    if(result.length === 1 || result.length > 140){
        return false ;
    }

    return result;
}

console.log(generateHashtag(''));