function isUnique(arr){
    arr.sort((a,b)=>a-b);

    if(arr[0] !==arr[1]){
        return arr[0];
    }else{
        return arr[arr.length-1];
    }
}

console.log(isUnique([1,1,2,1,1,1,]));