function process(string){
    let result = [];

    for (let char of string){
        if (char === "#"){
            result.pop();
        }else {
            result.push(char);
        }
    }

    return result.join('');
}

console.log(process("abc#d##c"));