function countBs(bString){
    var count = 0;
    for(var i = 0; i < bString.length; i++){
        if(bString.charAt(i) == "B")
            count++
    }
    return count;
}

function countChar(myString, myChar){
    var count = 0;
    for(var i = 0; i < myString.length; i++){
        if(myString.charAt(i) == myChar)
            count++
    }
    return count;
}

function newCountBs(bString){
    return countChar(bString, "B");
}

console.log(countBs("BBC"));

console.log(countChar("BBC","c"));

console.log("newCountBs: "+newCountBs("BBC"));