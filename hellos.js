function splitAndAdd(arr, n) {
  while (n > 0 && arr.length > 1) {  
    let mid = Math.floor(arr.length / 2);
    
    let array1 = arr.slice(0, mid);
    let array2 = arr.slice(mid);

    let newArr = [];
    let diff = array2.length - array1.length; 

  
    array1 = Array(diff).fill(0).concat(array1);

    for (let i = 0; i < array2.length; i++) {
      newArr.push(array1[i] + array2[i]); 
    }

    arr = newArr;
    n--;  
  }

  return arr;
}


console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7], 2));
