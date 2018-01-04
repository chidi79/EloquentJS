function reverseArray(myArr){
    var newArr = []
    for(var a = myArr.length; a>0; a--){
        newArr.push(myArr[a - 1]);
    }
    return newArr;
}

function reverseArrayInPlace(myArr){
    var temp = 0;
    for(var c = 0; c <= (myArr.length / 2) - 1; c++){
        temp = myArr[c];
        myArr[c] = myArr[myArr.length-(c+1)];
        myArr[myArr.length-(c+1)] = temp;
    }
    return myArr;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8]));