function range(start, end){
    var myArr = [];
    if(start > end){
        for(var i = start; i>=end;){
            myArr.push(i);
            if(typeof arguments[2]!= 'undefined')
                i+=arguments[2];
            else
                i--;                
        }
    }else{
        for(var i = start; i<=end;){
            myArr.push(i);
            if(typeof arguments[2]!= 'undefined')
                i+=arguments[2];
            else
                i++;
        }
    }

    return myArr;
}

function arraySum(numArr){
    var sum = 0;
    for(var i = 0; i < numArr.length; i++){
        sum += numArr[i];
    }
    return sum;
}


console.log("myArr: "+range(-5,5,2)+"\n");
console.log("the sum of myArr is: "+arraySum(range(-5,5,2))+"\n");