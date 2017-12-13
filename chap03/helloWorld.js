var power = function(base, exponent){
    var result = base;
    for(var count=1; count<exponent; count++){
        result *= base;
    }
    
    return result;
}

function multiplier(factor){
    return function(number){
        return number * factor;
    }
}
//console.log("2 cubed equals: "+power(2,3));

var someNumber = multiplier(13);
console.log("someNumber: "+someNumber(5));

var cowString = String(7);
console.log("cowString is: "+cowString.length+".");

