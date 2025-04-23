function count(string){
    if (string.length === 0){
        return {};
    }

    let newString = string.split('');
    let charCount = {};

    newString.forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    })

    return charCount;
}

console.log(count('abac'))