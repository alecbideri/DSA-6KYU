function binaryToString(binary){
    let result = '';

    for (let i = 0 ; i < binary.length ; i+=8){
        let byte = binary.slice(i, i+8);
        let decimal = parseInt(byte , 2);
        result += String.fromCharCode(decimal);
    }

    return result;
}

console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'));