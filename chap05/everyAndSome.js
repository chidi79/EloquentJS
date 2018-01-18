//performs 'action' on the array, every element of the array should meet the condition in 'action'
function every(everyArr, action){
    for(i = 0; i < everyArr.length; i++){
        if(!action(everyArr[i]))
            return false;
    }
    return true;
}

//performs 'action' on the array; at least one element of the array should meet the condition in 'action'
function some(someArr, action){
    for(i = 0; i < someArr.length; i++){
        if(action(someArr[i]))
            return true;
    }
    return false;
}

console.log(every([12, 25, 34, 'NaN'], isNaN));
console.log(every(['ZZ', 'YY', 'XX', 'NaN'], isNaN));

console.log(some([12, 25, 34, 'NaN'], isNaN));